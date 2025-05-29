import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import useLogDatas from '@hooks/pages/mainStack/userStyleLogPage/useLogDatas';

const UserStyleLogPage = () => {
  const {addLogData} = useLogDatas();

  const test = async () => {
    try {
      const result = await addLogData();
      console.log('Log data added:', result);
    } catch (e) {
      console.log('Image upload failed:', e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={test}>
        <Text>업로드</Text>
      </TouchableOpacity>
      {/* <LogList photos={photos} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(UserStyleLogPage);
