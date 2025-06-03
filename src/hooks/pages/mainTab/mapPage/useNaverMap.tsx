import {
  NaverMapViewRef,
  Camera,
  CameraChangeReason,
  Region,
} from '@mj-studio/react-native-naver-map';
import {useRef} from 'react';
import {debounce} from 'es-toolkit';
import {useAtomValue, useSetAtom} from 'jotai';
import {
  cameraMovedAtom,
  currentCoordinateAtom,
  mapCoordinateAtom,
} from '@jotai/pages/mainTab/mapPage';

type OnCameraChangedArgs = Camera & {
  reason: CameraChangeReason;
  region: Region;
};

const useNaverMap = () => {
  const ref = useRef<NaverMapViewRef>(null);
  const {latitude, longitude} = useAtomValue(currentCoordinateAtom);
  const setCameraMoved = useSetAtom(cameraMovedAtom);
  const setMapCoordinate = useSetAtom(mapCoordinateAtom);

  const onCameraChanged = debounce((args: OnCameraChangedArgs) => {
    setMapCoordinate({
      latitude: parseFloat(args.latitude.toFixed(7)),
      longitude: parseFloat(args.longitude.toFixed(7)),
    });
    const lat1 = latitude.toFixed(4);
    const lat2 = args.latitude.toFixed(4);
    const long1 = longitude.toFixed(4);
    const long2 = args.longitude.toFixed(4);

    if (lat1 !== lat2 || long1 !== long2) {
      setCameraMoved(true);
    }
  }, 100);

  return {ref, onCameraChanged};
};

export default useNaverMap;
