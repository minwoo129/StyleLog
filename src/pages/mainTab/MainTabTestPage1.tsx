import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {
  collection,
  getDocs,
  getFirestore,
  query,
} from '@react-native-firebase/firestore';

interface MainTabTestPage1Props {}

const MainTabTestPage1: FC<MainTabTestPage1Props> = ({}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [val, setVal] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const db = getFirestore();
      const testRef = collection(db, 'test');
      const q = query(testRef);

      const snapshot = await getDocs(q);
      console.log('snapshot: ', snapshot);
    } catch (error) {
      console.log('Error getting documents: ', error);
    }
  };
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
