import useFirebaseAuth from '@hooks/common/firebase/useFirebaseAuth';

const useLogin = () => {
  const {loginWithGoogle, checkisJoined, createUserDataAtFirestore} =
    useFirebaseAuth();
  const onClickGoogleLogin = async () => {
    try {
      const userAuthData = await loginWithGoogle();
      const {uid} = userAuthData.user;
      const isJoined = await checkisJoined(uid);
      if (!isJoined) {
        await createUserDataAtFirestore(userAuthData.user, 'google');
      }

      return userAuthData.user;
    } catch (e) {
      __DEV__ && console.log('Google login error:', e);
    }
  };

  return {
    onClickGoogleLogin,
  };
};

export default useLogin;
