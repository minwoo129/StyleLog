import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(Login);
