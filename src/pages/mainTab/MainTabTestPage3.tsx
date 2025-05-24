import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

interface MainTabTestPage3Props {}

const MainTabTestPage3: FC<MainTabTestPage3Props> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MainTabTestPage3</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(MainTabTestPage3);
