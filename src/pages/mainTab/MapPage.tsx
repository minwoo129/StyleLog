import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NaverMapView} from '@mj-studio/react-native-naver-map';
import useRequestShopList from '@hooks/pages/mainTab/mapPage/useRequestShopList';
import {useAtomValue} from 'jotai';
import {
  currentCoordinateAtom,
  shopListAtom,
} from '@jotai/pages/mainTab/mapPage';

const MapPage = () => {
  const {} = useRequestShopList();
  const shops = useAtomValue(shopListAtom);
  const currentCoordinate = useAtomValue(currentCoordinateAtom);

  console.log('MapPage shops:', shops);
  console.log('MapPage currentCoordinate:', currentCoordinate);
  return (
    <SafeAreaView style={styles.container}>
      <NaverMapView style={{flex: 1}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(MapPage);
