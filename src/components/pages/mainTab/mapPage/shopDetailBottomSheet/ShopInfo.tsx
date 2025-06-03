import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {KakaoSearchClosestShopDocument} from '@utils/API';

interface ShopInfoProps {
  shop: KakaoSearchClosestShopDocument;
}

const ShopInfo: FC<ShopInfoProps> = ({shop}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 32}}>{shop.place_name}</Text>
      <Text style={{fontSize: 16}}>{shop.road_address_name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
  },
  title: {
    fontSize: 32,
    color: '#6c6a6a',
  },
  address: {
    fontSize: 16,
    color: '#969696',
  },
});

export default React.memo(ShopInfo);
