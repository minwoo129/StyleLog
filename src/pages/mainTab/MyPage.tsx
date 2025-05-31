import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const MyPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MyPage</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(MyPage);
