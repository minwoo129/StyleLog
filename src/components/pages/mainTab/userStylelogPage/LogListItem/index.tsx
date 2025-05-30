import {APP_SIZE_INFO} from '@config';
import {FirestoreDocDataType, LogDataType} from '@constants/firebase/firestore';
import {USER_LOG_PLACEHOLDER_IMG} from '@constants/userLogs';
import {useAppNavigation} from '@hooks/common/navigation';
import React, {FC, useMemo, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const LENGTH = APP_SIZE_INFO.WINDOW_WIDTH / 3;

interface LogListItemProps {
  item: FirestoreDocDataType<LogDataType>;
}

const LogListItem: FC<LogListItemProps> = ({item}) => {
  const mainStackNavigation = useAppNavigation('MainStack');
  const [isError, setError] = useState(false);
  const photoURL = useMemo(() => {
    const isPhotoIncluded = item.photos.length > 0;
    const firstPhoto = isPhotoIncluded ? item.photos[0] : null;

    if (firstPhoto && !isError) {
      return firstPhoto;
    } else {
      return USER_LOG_PLACEHOLDER_IMG;
    }
  }, [item, isError]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log('onPress Image');
        mainStackNavigation.navigate('LogDetail', {
          logData: item,
        });
      }}>
      <Image
        source={{
          uri: photoURL,
        }}
        style={{width: '100%', height: '100%'}}
        onError={() => {
          setError(true);
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: LENGTH,
    height: LENGTH,
    borderWidth: 1,
    borderColor: 'white',
  },
  placeholderImg: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
});

export default React.memo(LogListItem);
