import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LogList from '@components/pages/mainTab/userStylelogPage/LogList';

const UserStyleLogPage = () => {
  const photos = [
    'https://picsum.photos/seed/lttqER5v/348/1839',
    'https://picsum.photos/seed/GpK3OCY/2831/2766',
    'https://loremflickr.com/875/3369?lock=5159114279910658',
    'https://picsum.photos/seed/jql5JeM5Q/114/3290',
    'https://loremflickr.com/995/3933?lock=3892228408545221',
    'https://loremflickr.com/21/3217?lock=7277624841201707',
    'https://loremflickr.com/732/11?lock=2311915992246046',
    'https://picsum.photos/seed/6INt1t/2525/920',
    'https://loremflickr.com/967/1215?lock=8815455922463041',
    'https://picsum.photos/seed/JZgBnLVtXs/2733/300',
    'https://loremflickr.com/1364/3195?lock=3079898710039860',
    'https://picsum.photos/seed/MWuTXZ1xqH/1402/2826',
    'https://loremflickr.com/498/3062?lock=6074953717913733',
    'https://picsum.photos/seed/kH0GGW/2523/3554',
    'https://loremflickr.com/2686/574?lock=1800862437636194',
    'https://loremflickr.com/3479/1962?lock=7787935877855433',
    'https://loremflickr.com/1041/2453?lock=8966641957098521',
  ];

  console.log('photos: ', photos);

  return (
    <SafeAreaView style={styles.container}>
      <LogList photos={photos} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(UserStyleLogPage);
