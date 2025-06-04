import useFirebaseAuth from '@hooks/common/firebase/useFirebaseAuth';
import {useAppNavigation} from '@hooks/common/navigation';

const useLogin = () => {
  const rootStackNavigation = useAppNavigation('RootStack');

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

      rootStackNavigation.reset({routes: [{name: 'MainStackNavigator'}]});
    } catch (e) {
      __DEV__ && console.log('Google login error:', e);
    }
  };

  return {
    onClickGoogleLogin,
  };
};

export default useLogin;
