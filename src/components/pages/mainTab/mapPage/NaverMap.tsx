import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {
  NaverMapView,
  NaverMapMarkerOverlay,
} from '@mj-studio/react-native-naver-map';
import {useAtomValue} from 'jotai';
import {
  currentCoordinateAtom,
  shopListAtom,
} from '@jotai/pages/mainTab/mapPage';
import useNaverMap from '@hooks/pages/mainTab/mapPage/useNaverMap';
import useShopDetailBottomSheet from '@hooks/pages/mainTab/mapPage/useShopDetailBottomSheet';

interface NaverMapProps {}

const NaverMap: FC<NaverMapProps> = ({}) => {
  const shops = useAtomValue(shopListAtom);
  const {latitude, longitude} = useAtomValue(currentCoordinateAtom);

  const {onCameraChanged, ref} = useNaverMap();

  const shopDetailBottomSheet = useShopDetailBottomSheet();

  return (
    <NaverMapView
      ref={ref}
      style={styles.container}
      camera={{latitude, longitude, zoom: 15}}
      onCameraChanged={onCameraChanged}>
      {shops.map(shop => {
        const {x, y, id, place_name} = shop;
        return (
          <NaverMapMarkerOverlay
            key={id}
            latitude={parseFloat(y)}
            longitude={parseFloat(x)}
            caption={{text: place_name}}
            anchor={{x: 0.5, y: 1}}
            onTap={() => {
              shopDetailBottomSheet.open(shop);
            }}
          />
        );
      })}
    </NaverMapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(NaverMap);
