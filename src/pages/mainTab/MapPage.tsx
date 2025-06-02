import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import useRequestShopList from '@hooks/pages/mainTab/mapPage/useRequestShopList';
import NaverMap from '@components/pages/mainTab/mapPage/NaverMap';

const MapPage = () => {
  useRequestShopList();

  return (
    <SafeAreaView style={styles.container}>
      <NaverMap />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(MapPage);
