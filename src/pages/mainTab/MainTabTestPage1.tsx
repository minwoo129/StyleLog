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
      // const firebaseapp = await initializeApp({
      //   apiKey: 'AIzaSyCmBQSNXLNNOjSLIrpV9EX3YPjjg0Wt9SI',
      //   authDomain: 'stylelogapp-1b1c3.firebaseapp.com',
      //   projectId: 'stylelogapp-1b1c3',
      //   storageBucket: 'stylelogapp-1b1c3.firebasestorage.app',
      //   messagingSenderId: '748700978217',
      //   appId: '1:748700978217:web:366114d3b33b7e16902038',
      //   measurementId: 'G-VHEYZCWM7J',
      //   databaseURL: 'https://stylelogapp-1b1c3-default-rtdb.firebaseio.com',
      // });
      // await initializeFirestore(firebaseapp, {
      //   experimentalAutoDetectLongPolling: true,
      //   useFetchStreams: false,
      // });
      const db = getFirestore();
      const testRef = collection(db, 'test');
      const q = query(testRef);

      const snapshot = await getDocs(q);
      console.log('snapshot: ', snapshot);
      // const snapshot = await firestore()
      //   .collection('test')
      //   .doc('Skr0SpjzuyUQD4Y4xTgX');
      // console.log('snapshot: ', snapshot);
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
