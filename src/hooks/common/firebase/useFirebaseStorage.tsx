import {ref, getDownloadURL} from '@react-native-firebase/storage';
import {firebaseStorage} from '@utils/firebase';
import dayjs from 'dayjs';
import {useCallback} from 'react';
import uuid from 'react-native-uuid';

const useFirebaseStorage = () => {
  const uploadFile = useCallback(async (filePath: string = '') => {
    try {
      const storageRef = ref(
        firebaseStorage,
        `/test/${dayjs().format('YYYYMMDD')}/${uuid.v4()}`,
      );

      const response = await storageRef.putFile(filePath);
      const url = await getDownloadURL(storageRef);
      console.log('File uploaded successfully:', url);
      return {uploadResponse: response, downloadURL: url};
    } catch (e) {
      throw e;
    }
  }, []);

  return {uploadFile};
};

export default useFirebaseStorage;
