import {testValue1Atom} from '@jotai/pages/mainTab/mainTabTestPage2';
import {useAtom} from 'jotai';
import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface MainTabTestPage2Props {}

const MainTabTestPage2: FC<MainTabTestPage2Props> = ({}) => {
  const [testValue1, setTestValue1] = useAtom(testValue1Atom);
  return (
    <SafeAreaView style={styles.container}>
      <Text>MainTabTestPage2</Text>
      <Text>testValue1: {testValue1}</Text>
      <TouchableOpacity onPress={() => setTestValue1(prev => prev + 1)}>
        <Text>{`testValue1 add`}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(MainTabTestPage2);
