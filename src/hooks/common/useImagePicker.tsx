import {useCallback} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

const useImagePicker = () => {
  const requestSingleImageInLibrary = useCallback(async () => {
    try {
      const image = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1,
      });
      if (!image.assets) {
        return null;
      }

      const [imgFile] = image.assets;
      return imgFile;
    } catch (e) {
      throw e;
    }
  }, []);

  return {requestSingleImageInLibrary};
};

export default useImagePicker;
