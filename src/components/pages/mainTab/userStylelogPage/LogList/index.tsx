import React, {FC} from 'react';
import {FlatList} from 'react-native';
import LogListItem from '../LogListItem';

interface LogListProps {
  photos: string[];
}

const LogList: FC<LogListProps> = ({photos}) => {
  return (
    <FlatList
      data={photos}
      keyExtractor={(_, index) => index.toString()}
      numColumns={3}
      renderItem={({item}) => {
        return <LogListItem item={item} />;
      }}
    />
  );
};

export default React.memo(LogList);
