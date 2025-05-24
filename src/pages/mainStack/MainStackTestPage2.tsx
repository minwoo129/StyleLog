import {useAppNavigation, useAppRoute} from '@hooks/common/navigation';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const MainStackTestPage2 = () => {
  const mainStackNavigation = useAppNavigation('MainStack');
  const {params} = useAppRoute('MainStack', 'MainStackTestPage2');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {id, name} = params;

  /**
   * 뒤로가기 예시
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const goBack = () => {
    mainStackNavigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>MainStackTestPage2</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(MainStackTestPage2);
