import {useAppNavigation} from '@hooks/common/navigation';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const MainStackTestPage1 = () => {
  const mainStackNavigation = useAppNavigation('MainStack');
  const rootStackNavigation = useAppNavigation('RootStack');

  /**
   * 로그인 페이지로 이동 예시
   * - Login 페이지는 AuthStackNavigator의 첫번째 페이지로 설정되어 있음
   * - AuthStackNavigator는 RootStackNavigator 상에 선언되어 있으므로,
   *   MainStackNavigator에서 AuthStackNavigator로 reset을 걸어주면
   *   로그인 페이지로 이동
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const moveToLoginPage = () => {
    rootStackNavigation.reset({routes: [{name: 'AuthStackNavigator'}]});
  };

  /**
   * Test2 페이지로 이동 예시
   * - Test2와 같이 페이지 이동 시 params를 넘겨야 하는 경우 아래와 같이 작성하면 됨
   * - 이때 params를 넘기지 않으면 TS 컴파일 에러를 반환함
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const moveToTest2 = () => {
    mainStackNavigation.navigate('MainStackTestPage2', {
      id: 1,
      name: 'MainStackTestPage2',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>MainStackTestPage1</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(MainStackTestPage1);
