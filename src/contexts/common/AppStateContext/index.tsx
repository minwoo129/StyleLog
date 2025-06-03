import React, {createContext, useState} from 'react';
import {AppStateContextType} from './types';
import {ProviderType} from '../../types';
import {FirestoreDocDataType, UserType} from '@constants/firebase/firestore';
import {firebaseAuth, firestoreDB} from '@utils/firebase';
import {
  FirebaseAuthTypes,
  onAuthStateChanged,
} from '@react-native-firebase/auth';
import {doc, getDoc} from '@react-native-firebase/firestore';

const AppStateContext = createContext<AppStateContextType>({
  loginUser: null,
});

export const AppStateContextProvider: ProviderType = ({children}) => {
  const [loginUser, setLoginUser] =
    useState<FirestoreDocDataType<UserType> | null>(null);

  onAuthStateChanged(firebaseAuth, user => {
    if (!user) {
      setLoginUser(null);
      return;
    }

    if (!loginUser) {
      getUserData(user);
      return;
    }

    if (user.uid !== loginUser.documentInfo.documentId) {
      getUserData(user);
      return;
    }
  });

  const getUserData = async (user: FirebaseAuthTypes.User) => {
    const {uid} = user;

    try {
      const ref = doc(firestoreDB, 'users', uid);
      const snapshot = await getDoc(ref);
      const data = snapshot.data() as UserType;
      setLoginUser({
        ...data,
        documentInfo: {
          documentId: snapshot.id,
          collection: 'users',
        },
      });
    } catch (e) {
      __DEV__ && console.log('Error getting user data: ', e);
    }
  };

  return (
    <AppStateContext.Provider value={{loginUser}}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;
