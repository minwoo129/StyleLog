import {getAuth} from '@react-native-firebase/auth';
import {getFirestore} from '@react-native-firebase/firestore';

export const firestoreDB = getFirestore();

export const firebaseAuth = getAuth();
