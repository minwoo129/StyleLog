import {IC_GOOGLE} from '@utils/icons';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface GoogleLoginButtonProps {
  onClickGoogleLogin: () => Promise<void>;
}

interface TestLoginButtonProps {
  onClickTestLogin: () => Promise<void>;
}

export const GoogleLoginButton = ({
  onClickGoogleLogin,
}: GoogleLoginButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClickGoogleLogin}>
      <Image source={IC_GOOGLE} style={styles.buttonIcon} />
      <Text style={styles.buttonText}>구글로 로그인</Text>
    </TouchableOpacity>
  );
};

export const TestLoginButton = ({onClickTestLogin}: TestLoginButtonProps) => {
  if (!__DEV__) return null;
  return (
    <TouchableOpacity style={styles.button} onPress={onClickTestLogin}>
      <Text style={styles.buttonText}>테스트 로그인</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#c9c8c8',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonIcon: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 1,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
  },
});
