import {
  FirebaseAuthTypes,
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  deleteUser,
} from '@react-native-firebase/auth';
import {getDoc, doc, setDoc} from '@react-native-firebase/firestore';
import {ReactNativeFirebase} from '@react-native-firebase/app';
import {
  reqeustGoogleWithdraw,
  requestGoogleSignin,
  requestGoogleSignOut,
} from '@utils/socialLogin/google';
import {SocialType} from '@constants/firebase/firestore';
import {firebaseAuth, firestoreDB} from '@utils/firebase';
import {useContext} from 'react';
import AppStateContext from '@contexts/common/AppStateContext';
import dayjs from 'dayjs';

const useFirebaseAuth = () => {
  const {loginUser} = useContext(AppStateContext);
  const loginWithGoogle = async () => {
    try {
      const googleUserData = await requestGoogleSignin();
      if (!googleUserData) {
        throw new Error('Google sign-in failed: No user data received');
      }
      const {idToken} = googleUserData;

      const googleCredential = GoogleAuthProvider.credential(idToken);
      const res = await signInWithCredential(firebaseAuth, googleCredential);

      return res;
    } catch (e) {
      throw e;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const requestEmailLogin = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (e) {
      const error = e as ReactNativeFirebase.NativeFirebaseError;
      if (error.code === 'auth/invalid-credential') {
        createUserDataAtEmail(email, password);
        // 회원정보가 존재하지 않는 경우 => 회원가입 페이지로 이동(소셜로그인만 있기 때문)
        return;
      }

      __DEV__ && console.log('Email sign-in error:', e);
    }
  };

  const createUserDataAtEmail = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
      createUserDataAtFirestore(result.user, 'naver');
    } catch (e) {
      throw e;
    }
  };

  const checkisJoined = async (uid: string) => {
    try {
      const ref = doc(firestoreDB, 'users', uid);
      const snapshot = await getDoc(ref);

      const data = snapshot.data();

      return data ? true : false;
    } catch (e) {
      throw e;
    }
  };

  const createUserDataAtFirestore = async (
    userData: FirebaseAuthTypes.User,
    socialType: SocialType,
  ) => {
    const {email, displayName, photoURL} = userData;
    const dateTime = dayjs().format();
    try {
      const ref = doc(firestoreDB, 'users', userData.uid);
      await setDoc(ref, {
        email: email ?? '',
        name: displayName ?? 'test',
        socialType,
        expiredAt: null,
        profileImg: photoURL,
        createdAt: dateTime,
        updatedAt: dateTime,
      });
    } catch (e) {
      throw e;
    }
  };

  const logout = async () => {
    if (!loginUser) {
      return;
    }

    try {
      await signOut(firebaseAuth);
      if (loginUser.socialType === 'google') {
        await requestGoogleSignOut();
        return;
      }
    } catch (e) {
      throw e;
    }
  };

  const revoke = async () => {
    const {currentUser} = firebaseAuth;
    if (!currentUser || !loginUser) {
      return;
    }

    const social = loginUser.socialType;

    try {
      await logout();
      await deleteUser(currentUser);
      if (social === 'google') {
        await reqeustGoogleWithdraw();
      }
    } catch (e) {
      throw e;
    }
  };

  return {
    loginWithGoogle,
    checkisJoined,
    createUserDataAtFirestore,
    logout,
    revoke,
  };
};

export default useFirebaseAuth;
