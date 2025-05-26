import useLogin from '@hooks/pages/authStack/login/useLogin';
import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  //const [email, onChangeEmail] = useLoginInput();
  //const [password, onChangePassword] = useLoginInput();

  const {onClickGoogleLogin} = useLogin();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>

      <TouchableOpacity onPress={onClickGoogleLogin}>
        <Text>Google Login</Text>
      </TouchableOpacity>
      {/* <LoginInput
        type="email"
        value={email}
        onChangeText={onChangeEmail}
        placeholder="이메일을 입력하세요"
      />
      <LoginInput
        type="password"
        value={password}
        onChangeText={onChangePassword}
        placeholder="비밀번호를 입력하세요"
        customStyle={{marginTop: 20}}
      />

      <LoginBtn onPress={onPressLogin} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
});

export default React.memo(Login);
