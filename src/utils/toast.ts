import {Platform} from 'react-native';
import Toast from 'react-native-simple-toast';

export const showToast = (message: string, yOffset?: number) => {
  if (Platform.OS === 'android') Toast.show(message, Toast.SHORT);
  else {
    Toast.showWithGravityAndOffset(message, Toast.LONG, 0, 0, yOffset ?? -50);
  }
};
