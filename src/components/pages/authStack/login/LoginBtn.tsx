import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface LoginBtnProps {
  onPress?: () => void;
}

const LoginBtn: FC<LoginBtnProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>로그인</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
});

export default React.memo(LoginBtn);
