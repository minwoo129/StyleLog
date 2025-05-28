import React, {FC, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {addDoc, collection, onSnapshot} from '@react-native-firebase/firestore';
import useFirestore from '@hooks/common/firebase/useFirestore';
import {firestoreDB} from '@utils/firebase';

interface MainTabTestPage1Props {}

const MainTabTestPage1: FC<MainTabTestPage1Props> = ({}) => {
  const {convertSnapshotToData} = useFirestore();
  const ref = collection(firestoreDB, 'test');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      onSnapshot(ref, snapshot => {
        const datas = convertSnapshotToData<{
          name: string;
          age: string;
          birth: string;
        }>('test', snapshot);
        console.log('datas: ', datas);
      });
    } catch (error) {
      console.log('Error getting documents: ', error);
    }
  };

  const addData = async () => {
    try {
      const res = await addDoc(ref, {
        name: 'test1',
        age: '23',
        birth: '2024-05-01',
      });

      console.log('res: ', res);
    } catch (e) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>MainTabTestPage1</Text>
      <TouchableOpacity onPress={addData}>
        <Text>Add Data</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(MainTabTestPage1);
