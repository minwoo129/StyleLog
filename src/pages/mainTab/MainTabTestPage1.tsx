import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

interface MainTabTestPage1Props {}

const MainTabTestPage1: FC<MainTabTestPage1Props> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MainTabTestPage1</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(MainTabTestPage1);
