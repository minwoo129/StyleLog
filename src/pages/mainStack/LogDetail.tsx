import CommonHeader, {BackBtn} from '@components/common/CommonHeader';
import ImageView from '@components/pages/mainStack/logDetail/ImageView';
import {useAppRoute} from '@hooks/common/navigation';
import useLogDetail from '@hooks/pages/mainStack/LogDetail/useLogDetail';
import {ViewPager} from '@ui-kitten/components';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const LogDetail = () => {
  const {
    params: {logData},
  } = useAppRoute('MainStack', 'LogDetail');

  const {selectedIdx, onChangeIndex, onPressBack} = useLogDetail();

  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader left={<BackBtn onPress={onPressBack} />} />
      <ViewPager
        selectedIndex={selectedIdx}
        shouldLoadComponent={index => index === selectedIdx}
        onSelect={onChangeIndex}>
        {logData.photos.map(photoUri => {
          return <ImageView key={photoUri} photoUri={photoUri} />;
        })}
      </ViewPager>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(LogDetail);
