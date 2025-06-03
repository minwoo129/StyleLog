import {
  cameraMovedAtom,
  currentCoordinateAtom,
  mapCoordinateAtom,
  shopListAtom,
} from '@jotai/pages/mainTab/mapPage';
import {kakaoSearchClosestShop} from '@utils/API';
import {showToast} from '@utils/toast';
import {useAtomValue, useSetAtom} from 'jotai';

const useCurrentLocationSearchBtn = () => {
  const mapCoordinate = useAtomValue(mapCoordinateAtom);
  const setShops = useSetAtom(shopListAtom);
  const setCurrentCoordinate = useSetAtom(currentCoordinateAtom);
  const setCameraMoved = useSetAtom(cameraMovedAtom);

  const onPressSearchBtn = async () => {
    try {
      const {latitude, longitude} = mapCoordinate;
      setCurrentCoordinate({latitude, longitude});
      const result = await kakaoSearchClosestShop({
        x: longitude,
        y: latitude,
      });
      setShops(result.documents);
      setCameraMoved(false);
    } catch (e) {
      showToast(
        '주변 미용실 정보를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.',
      );
    }
  };

  return {onPressSearchBtn};
};

export default useCurrentLocationSearchBtn;
