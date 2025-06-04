import {GoogleLoginButton} from '@components/pages/authStack/login/SNSLoginButtons';
import useLogin from '@hooks/pages/authStack/login/useLogin';
import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  const {onClickGoogleLogin} = useLogin();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.buttonsGrid}>
        <GoogleLoginButton onClickGoogleLogin={onClickGoogleLogin} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 100,
    marginLeft: 32,
  },
  buttonsGrid: {
    width: '100%',
    alignItems: 'center',
    marginTop: 100,
  },
});

export default React.memo(Login);
