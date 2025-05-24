import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

interface MainTabTestPage2Props {}

const MainTabTestPage2: FC<MainTabTestPage2Props> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MainTabTestPage2</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(MainTabTestPage2);
