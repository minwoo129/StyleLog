import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const MapPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MapPage</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(MapPage);
