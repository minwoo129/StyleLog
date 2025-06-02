import React, {FC, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {
  NaverMapView,
  NaverMapViewRef,
  NaverMapMarkerOverlay,
} from '@mj-studio/react-native-naver-map';
import {useAtomValue} from 'jotai';
import {
  currentCoordinateAtom,
  shopListAtom,
} from '@jotai/pages/mainTab/mapPage';

interface NaverMapProps {}

const NaverMap: FC<NaverMapProps> = ({}) => {
  const shops = useAtomValue(shopListAtom);
  const {latitude, longitude} = useAtomValue(currentCoordinateAtom);

  const ref = useRef<NaverMapViewRef>(null);

  return (
    <NaverMapView
      ref={ref}
      style={styles.container}
      camera={{latitude, longitude, zoom: 15}}>
      {shops.map(shop => {
        const {x, y, id, place_name} = shop;
        return (
          <NaverMapMarkerOverlay
            key={id}
            latitude={parseFloat(y)}
            longitude={parseFloat(x)}
            caption={{text: place_name}}
            anchor={{x: 0.5, y: 1}}
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
