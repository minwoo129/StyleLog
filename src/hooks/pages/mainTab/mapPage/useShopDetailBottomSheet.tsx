import CloseButton from '@components/pages/mainTab/mapPage/shopDetailBottomSheet/CloseButton';
import PhoneCallButton from '@components/pages/mainTab/mapPage/shopDetailBottomSheet/PhoneCallButton';
import ShopInfo from '@components/pages/mainTab/mapPage/shopDetailBottomSheet/ShopInfo';
import Tags from '@components/pages/mainTab/mapPage/shopDetailBottomSheet/Tags';
import ThumbnailImg from '@components/pages/mainTab/mapPage/shopDetailBottomSheet/ThumbnailImg';
import {APP_SIZE_INFO} from '@config';
import {BottomSheet} from '@rneui/themed';
import {useOverlay} from '@toss/use-overlay';
import {KakaoSearchClosestShopDocument} from '@utils/API';
import React, {useMemo} from 'react';
import {ScrollView, View} from 'react-native';

interface ShopDetailBottomSheetProps {
  open: boolean;
  close: () => void;
  shop: KakaoSearchClosestShopDocument;
}

const useShopDetailBottomSheet = () => {
  const overlay = useOverlay();

  return useMemo(
    () => ({
      open: (shop: KakaoSearchClosestShopDocument) =>
        overlay.open(({isOpen, close}) => (
          <ShopDetailBottomSheet open={isOpen} close={close} shop={shop} />
        )),
      close: overlay.close,
    }),
    [overlay],
  );
};

const ShopDetailBottomSheet = ({
  open,
  close,
  shop,
}: ShopDetailBottomSheetProps) => {
  return (
    <BottomSheet isVisible={open} onBackdropPress={close}>
      <View
        style={{
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: APP_SIZE_INFO.WINDOW_HEIGHT * 0.8,
        }}>
        <ThumbnailImg />
        <View
          style={{
            flex: 1,
          }}>
          <ScrollView
            style={{flex: 1, height: '100%'}}
            showsVerticalScrollIndicator={false}>
            <View style={{width: '100%', paddingHorizontal: 20}}>
              <ShopInfo shop={shop} />
              <Tags shop={shop} />

              <PhoneCallButton shop={shop} />
            </View>
          </ScrollView>
          <CloseButton onPressClose={close} />
        </View>
      </View>
    </BottomSheet>
  );
};

export default useShopDetailBottomSheet;
