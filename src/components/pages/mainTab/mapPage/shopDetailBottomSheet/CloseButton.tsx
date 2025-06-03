import {Button} from '@rneui/themed';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

interface CloseButtonProps {
  onPressClose: () => void;
}

const CloseButton: FC<CloseButtonProps> = ({onPressClose}) => {
  return (
    <View style={styles.container}>
      <Button title="닫기" buttonStyle={styles.button} onPress={onPressClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    width: '100%',
    height: 48,
    borderRadius: 16,
    backgroundColor: '#f41a1a',
  },
});

export default React.memo(CloseButton);
