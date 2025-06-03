import {FirestoreDocDataType, LogDataType} from '@constants/firebase/firestore';
import useFirebaseStorage from '@hooks/common/firebase/useFirebaseStorage';
import useFirestore from '@hooks/common/firebase/useFirestore';
import useImagePicker from '@hooks/common/useImagePicker';
import {addDoc, collection, onSnapshot} from '@react-native-firebase/firestore';
import {firestoreDB} from '@utils/firebase';
import dayjs from 'dayjs';
import {useCallback, useEffect, useState} from 'react';

const useLogDatas = () => {
  const [logDatas, setLogDatas] = useState<FirestoreDocDataType<LogDataType>[]>(
    [],
  );

  const ref = collection(firestoreDB, 'testuserlogs');
  const {convertSnapshotToData} = useFirestore();
  const {uploadFile} = useFirebaseStorage();
  const {requestSingleImageInLibrary} = useImagePicker();

  useEffect(() => {
    const unsubscribe = onSnapshot(ref, snapshot => {
      const datas = convertSnapshotToData<LogDataType>('userlogs', snapshot);
      setLogDatas(datas);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const addLogData = useCallback(async () => {
    try {
      const image = await requestSingleImageInLibrary();
      if (!image) {
        return;
      }

      const {downloadURL} = await uploadFile(image.uri);
      const dateTime = dayjs().format();

      const addedResult = await addDoc(ref, {
        createdAt: dateTime,
        updatedAt: dateTime,
        shopInfo: null,
        photos: [downloadURL],
        userId: 'test',
      });

      return addedResult;
    } catch (e) {
      throw e;
    }
  }, []);

  return {logDatas, addLogData};
};

export default useLogDatas;
