import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import useLogDatas from '@hooks/pages/mainTab/userStyleLogPage/useLogDatas';
import LogList from '@components/pages/mainTab/userStylelogPage/LogList';
import CommonHeader from '@components/common/CommonHeader';

const UserStyleLogPage = () => {
  const {logDatas} = useLogDatas();
  // const test = async () => {
  //   try {
  //     const result = await addLogData();
  //     console.log('Log data added:', result);
  //   } catch (e) {
  //     console.log('Image upload failed:', e);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader />
      <LogList photos={logDatas} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default React.memo(UserStyleLogPage);
