import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import useRequestShopList from '@hooks/pages/mainTab/mapPage/useRequestShopList';
import NaverMap from '@components/pages/mainTab/mapPage/NaverMap';
import CurrentLocationSearchBtn from '@components/pages/mainTab/mapPage/CurrentLocationSearchBtn';

const MapPage = () => {
  useRequestShopList();

  return (
    <SafeAreaView style={styles.container}>
      <NaverMap />

      <CurrentLocationSearchBtn />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(MapPage);
