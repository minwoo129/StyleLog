import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

interface JoinProps {}

const Join: FC<JoinProps> = ({}) => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(Join);
