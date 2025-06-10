import {FirestoreDocDataType, UserType} from '@constants/firebase/firestore';

export type AppStateContextType = {
  loginUser: FirestoreDocDataType<UserType> | null;
};
