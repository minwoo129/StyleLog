import useFirebaseAuth from '@hooks/common/firebase/useFirebaseAuth';
import {useAppNavigation} from '@hooks/common/navigation';

const useLogin = () => {
  const rootStackNavigation = useAppNavigation('RootStack');

  const {
    loginWithGoogle,
    checkisJoined,
    createUserDataAtFirestore,
    requestTestLogin,
  } = useFirebaseAuth();
  const onClickGoogleLogin = async () => {
    try {
      const userAuthData = await loginWithGoogle();
      const {uid} = userAuthData.user;
      const isJoined = await checkisJoined(uid);
      if (!isJoined) {
        await createUserDataAtFirestore(userAuthData.user, 'google');
      }

      rootStackNavigation.reset({routes: [{name: 'MainStackNavigator'}]});
    } catch (e) {
      __DEV__ && console.log('Google login error:', e);
    }
  };

  const onClickTestLogin = async () => {
    if (!__DEV__) return;

    try {
      await requestTestLogin('aaa@test.aa', '123456');
      rootStackNavigation.reset({routes: [{name: 'MainStackNavigator'}]});
    } catch (e) {
      __DEV__ && console.log('Test login error:', e);
    }
  };

  return {
    onClickGoogleLogin,
    onClickTestLogin,
  };
};

export default useLogin;
