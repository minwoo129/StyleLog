import {Icon} from '@rneui/themed';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

interface ThumbnailImgProps {}

const ThumbnailImg: FC<ThumbnailImgProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Icon
        type="material-community"
        name="image-broken-variant"
        color={'#888885'}
        size={50}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BDBDBD',
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(ThumbnailImg);
