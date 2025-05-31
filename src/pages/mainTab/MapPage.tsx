import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NaverMapView} from '@mj-studio/react-native-naver-map';

const MapPage = () => {
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
