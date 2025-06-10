import {getApp} from '@react-native-firebase/app';
import {getAuth} from '@react-native-firebase/auth';
import {getFirestore} from '@react-native-firebase/firestore';
import {getStorage} from '@react-native-firebase/storage';

export const firestoreDB = getFirestore();

export const firebaseAuth = getAuth();

export const firebaseStorage = getStorage(
  getApp(),
  'gs://stylelogapp-1b1c3.firebasestorage.app',
);
