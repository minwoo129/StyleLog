import useCurrentLocationSearchBtn from '@hooks/pages/mainTab/mapPage/useCurrentLocationSearchBtn';
import {cameraMovedAtom} from '@jotai/pages/mainTab/mapPage';
import {Chip} from '@rneui/themed';
import {useAtomValue} from 'jotai';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';

interface CurrentLocationSearchBtnProps {}

const CurrentLocationSearchBtn: FC<CurrentLocationSearchBtnProps> = ({}) => {
  const isCameraMoved = useAtomValue(cameraMovedAtom);
  const {onPressSearchBtn} = useCurrentLocationSearchBtn();
  if (!isCameraMoved) return null;

  return (
    <Chip
      title={'현위치에서 검색'}
      containerStyle={styles.container}
      onPress={onPressSearchBtn}
      type="outline"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    backgroundColor: 'white',
  },
});

export default React.memo(CurrentLocationSearchBtn);
