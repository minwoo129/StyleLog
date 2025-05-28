import React, {FC} from 'react';
import {StyleProp, StyleSheet, TextInput, View, ViewStyle} from 'react-native';

interface LoginInputProps {
  type: 'email' | 'password';
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  customStyle?: StyleProp<ViewStyle>;
}

const LoginInput: FC<LoginInputProps> = ({
  type,
  value,
  onChangeText,
  placeholder = '',
  customStyle,
}) => {
  return (
    <View style={[styles.container, customStyle]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={type === 'password'}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#333',
  },
});

export default React.memo(LoginInput);
