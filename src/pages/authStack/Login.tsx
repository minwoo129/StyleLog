import LoginBtn from '@components/pages/authStack/login/LoginBtn';
import LoginInput from '@components/pages/authStack/login/LoginInput';
import useLoginInput from '@hooks/pages/authStack/login/useLoginInput';
import React, {FC} from 'react';
import {signInWithEmailAndPassword, getAuth} from '@react-native-firebase/auth';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {ReactNativeFirebase} from '@react-native-firebase/app';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  const [email, onChangeEmail] = useLoginInput();
  const [password, onChangePassword] = useLoginInput();

  const onPressLogin = async () => {
    console.log('email:', email);
    console.log('password:', password);
    try {
      const res = await signInWithEmailAndPassword(getAuth(), email, password);
      console.log('Login successful:', res.user);
    } catch (e) {
      const error = e as ReactNativeFirebase.NativeFirebaseError;

      if (error.code === 'auth/invalid-credential') {
        //console.log('Invalid credentials:', error.message);
        // 회원정보가 존재하지 않는 경우 => 회원가입 페이지로 이동(소셜로그인만 있기 때문)
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>

      <LoginInput
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

      <LoginBtn onPress={onPressLogin} />
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
