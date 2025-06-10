import {Button} from '@rneui/base';
import {Icon} from '@rneui/themed';
import {KakaoSearchClosestShopDocument} from '@utils/API';
import React, {FC} from 'react';
import {Linking, StyleSheet, Text} from 'react-native';

interface PhoneCallButtonProps {
  shop: KakaoSearchClosestShopDocument;
}

const PhoneCallButton: FC<PhoneCallButtonProps> = ({shop}) => {
  return (
    <Button
      buttonStyle={styles.container}
      onPress={() => {
        Linking.openURL(`tel:${shop.phone}`);
      }}>
      <Icon name="phone" type="font-awesome" size={20} />

      <Text style={styles.buttonTxt}>전화걸기</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#c9c8c8',
    borderRadius: 16,
  },
  buttonTxt: {
    fontSize: 16,
    color: '#9b9b9b',
    marginLeft: 8,
  },
});

export default React.memo(PhoneCallButton);
