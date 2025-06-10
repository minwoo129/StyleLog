import {APP_SIZE_INFO} from '@config';
import {USER_LOG_PLACEHOLDER_IMG} from '@constants/userLogs';
import {Layout} from '@ui-kitten/components';
import React, {FC, useMemo, useState} from 'react';
import {Image, StyleSheet} from 'react-native';

interface ImageViewProps {
  photoUri: string;
}

const ImageView: FC<ImageViewProps> = ({photoUri}) => {
  const [isError, setError] = useState(false);
  const photoURL = useMemo(() => {
    const originalUrl = photoUri;

    if (!isError) {
      return originalUrl;
    }

    return USER_LOG_PLACEHOLDER_IMG;
  }, [photoUri, isError]);

  return (
    <Layout style={styles.container}>
      <Image
        source={{uri: photoURL}}
        style={styles.img}
        onError={() => {
          setError(true);
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: APP_SIZE_INFO.WINDOW_WIDTH,
    height: APP_SIZE_INFO.WINDOW_WIDTH,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default React.memo(ImageView);
