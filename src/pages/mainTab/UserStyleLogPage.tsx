import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const UserStyleLogPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>UserStyleLogPage</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(UserStyleLogPage);
