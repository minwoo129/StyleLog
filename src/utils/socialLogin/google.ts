import {FIREBASE_CONFIG} from '@config';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const requestGoogleSignin = async () => {
  const {clientId} = FIREBASE_CONFIG;
  try {
    GoogleSignin.configure({
      webClientId: clientId,
      offlineAccess: true,
    });
    await GoogleSignin.hasPlayServices();
    const googleProfile = await GoogleSignin.signIn();
    const googleUserData = googleProfile.data;

    return googleUserData;
  } catch (e) {
    throw e;
  }
};

export const requestGoogleSignOut = async () => {
  try {
    await GoogleSignin.signOut();
  } catch (e) {
    throw e;
  }
};

export const reqeustGoogleWithdraw = async () => {
  try {
    await GoogleSignin.revokeAccess();
  } catch (e) {
    throw e;
  }
};
