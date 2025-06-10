import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import useLogDatas from '@hooks/pages/mainTab/userStyleLogPage/useLogDatas';
import LogList from '@components/pages/mainTab/userStylelogPage/LogList';
import CommonHeader, {HeaderTitle} from '@components/common/CommonHeader';

const UserStyleLogPage = () => {
  const {logDatas} = useLogDatas();

  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader left={<HeaderTitle text="StyleLog" />} />
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
