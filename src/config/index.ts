import {
  API_URL,
  FIREBASE_ANDROID_APP_ID,
  FIREBASE_API_KEY,
  FIREBASE_DATABASE_URL,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_WEB_APP_ID,
  FIREBASE_WEB_CLIENT_ID,
  KAKAO_REST_API_KEY,
  SERVER_TYPE,
} from '@env';
import {ReactNativeFirebase} from '@react-native-firebase/app';
import {Dimensions} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

/**
 * API 호출 정보
 * - API_URL: API 호출 URL
 * - SERVER_TYPE: 서버 유형(개발, 운영)
 */
export const API_INFO = {
  API_URL,
  SERVER_TYPE,
};

export const FIREBASE_CONFIG: ReactNativeFirebase.FirebaseAppOptions = {
  apiKey: FIREBASE_API_KEY,
  appId: FIREBASE_WEB_APP_ID,
  projectId: FIREBASE_PROJECT_ID,
  androidClientId: FIREBASE_ANDROID_APP_ID,
  databaseURL: FIREBASE_DATABASE_URL,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  clientId: FIREBASE_WEB_CLIENT_ID,
};

export const KAKAO_SECURE_INFO = {
  kakaoRestAPIKey: KAKAO_REST_API_KEY,
};

export const APP_SIZE_INFO = {
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
};
