import {APP_SIZE_INFO} from '@config';
import React, {FC} from 'react';
import {Image, TouchableOpacity} from 'react-native';

const LENGTH = APP_SIZE_INFO.WINDOW_WIDTH / 3;

interface LogListItemProps {
  item: string;
}

const LogListItem: FC<LogListItemProps> = ({item}) => {
  return (
    <TouchableOpacity
      style={{width: LENGTH, height: LENGTH}}
      onPress={() => {
        console.log('onPress Image');
      }}>
      <Image source={{uri: item}} style={{width: '100%', height: '100%'}} />
    </TouchableOpacity>
  );
};

export default React.memo(LogListItem);
