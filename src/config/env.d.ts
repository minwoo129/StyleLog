declare module '@env' {
  /** API 호출 URL */
  export const API_URL: string;
  /** 서버 유형(개발, 운영) */
  export const SERVER_TYPE: string;
  /**
   * ===================== Firebase Configurations =====================
   * @description Firebase API key
   * - match property: apiKey
   */
  export const FIREBASE_API_KEY: string;
  /**
   * ===================== Firebase Configurations =====================
   * @description Firebase Auth Domain
   * - match property: authDomain
   */
  export const FIREBASE_AUTH_DOMAIN: string;
  /**
   * ===================== Firebase Configurations =====================
   * @description Firebase Database URL
   * - match property: databaseURL
   */
  export const FIREBASE_DATABASE_URL: string;
  /**
   * ===================== Firebase Configurations =====================
   * @description Firebase Project ID
   * - match property: projectId
   */
  export const FIREBASE_PROJECT_ID: string;
  /**
   * ===================== Firebase Configurations =====================
   * @description Firebase Storage Bucket
   * - match property: storageBucket
   */
  export const FIREBASE_STORAGE_BUCKET: string;
  /**
   * ===================== Firebase Configurations =====================
   * @description Firebase Messaging Sender ID
   * - match property: messagingSenderId
   */
  export const FIREBASE_MESSAGING_SENDER_ID: string;
  /**
   * ===================== Firebase Configurations =====================
   * - @description Firebase App ID(Web)
   * - match property: appId(web의 경우에만)
   */
  export const FIREBASE_WEB_APP_ID: string;
  /**
   * ===================== Firebase Configurations =====================
   * @description Firebase Android App Id
   * - match property: androidClientId
   */
  export const FIREBASE_ANDROID_APP_ID: string;
  /**
   * ===================== Firebase Configurations =====================
   * @description Firebase Web Client Id
   */
  export const FIREBASE_WEB_CLIENT_ID: string;
  /**
   * ===================== Firebase Configurations =====================
   * @description Firebase Measurement ID
   * - match property: measurementId
   */
  export const FIREBASE_MEASUREMENT_ID: string;
  /**
   * ===================== Kakao API 보안정보 =====================
   * @description 카카오 API 키(Rest API)
   */
  export const KAKAO_REST_API_KEY: string;
}
