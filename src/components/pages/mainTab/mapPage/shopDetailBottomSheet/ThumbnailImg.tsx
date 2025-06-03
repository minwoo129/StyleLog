import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

interface ThumbnailImgProps {}

const ThumbnailImg: FC<ThumbnailImgProps> = ({}) => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BDBDBD',
    width: '100%',
    height: 200,
  },
});

export default React.memo(ThumbnailImg);
