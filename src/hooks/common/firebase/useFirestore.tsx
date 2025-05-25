import {
  FirestoreCollectionType,
  FirestoreDocDataType,
} from '@constants/firebase/firestore';
import {
  FirebaseFirestoreTypes,
  getFirestore,
} from '@react-native-firebase/firestore';
import {useCallback} from 'react';

const useFirestore = () => {
  const db = getFirestore();

  const convertSnapshotToData = useCallback(
    <T extends Record<string, any>>(
      collection: FirestoreCollectionType,
      snapshot: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
    ) => {
      let results: FirestoreDocDataType<T>[] = [];

      snapshot.forEach(doc => {
        const data = doc.data() as T;
        const documentId = doc.id;

        results.push({
          ...data,
          documentInfo: {
            documentId,
            collection,
          },
        });
      });

      return results;
    },
    [],
  );

  return {db, convertSnapshotToData};
};

export default useFirestore;
