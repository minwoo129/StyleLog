import {
  Coordinate,
  DEFAULT_COORDINATES,
  LocationPermissionError,
} from '@constants/location';
import {
  currentCoordinateAtom,
  shopListAtom,
} from '@jotai/pages/mainTab/mapPage';
import {kakaoSearchClosestShop} from '@utils/API';
import {findCurrentLocation} from '@utils/location/findLocation';
import {requestLocationPermission} from '@utils/location/requestPermission';
import {showToast} from '@utils/toast';
import {AxiosError} from 'axios';
import {useSetAtom} from 'jotai';
import {useCallback, useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';

type RequestShopDataParams = {} & Coordinate;

const useRequestShopList = () => {
  const [isPermissionGranted, setPermissionGranted] = useState(false);
  const setShops = useSetAtom(shopListAtom);
  const setCurrentCoordinate = useSetAtom(currentCoordinateAtom);

  useEffect(() => {
    getFirstShopList();
  }, []);

  const getFirstShopList = async () => {
    try {
      const permissionStatus = await requestPermission();
      const {status, platform} = permissionStatus;
      if (status !== 'granted') {
        showToast('위치 권한이 활성화되지 않아 기본 위치로 탐색합니다.');
        const {latitude, longitude} = DEFAULT_COORDINATES;
        setCurrentCoordinate({latitude, longitude});
        await requestShopData({latitude, longitude});
        return;
      }

      setPermissionGranted(true);
      if (platform === 'android') {
        const isGPSEnabled = await checkAndroidGPSEnabled();
        if (!isGPSEnabled) {
          showToast('GPS가 활성화되어 있지 않아 기본 위치로 탐색합니다.');
          const {latitude, longitude} = DEFAULT_COORDINATES;
          setCurrentCoordinate({latitude, longitude});

          await requestShopData({latitude, longitude});
          return;
        }
      }
      const {latitude, longitude} = await findCurrentLocation();
      setCurrentCoordinate({latitude, longitude});
      await requestShopData({latitude, longitude});
    } catch (e) {
      const error = e as LocationPermissionError;
      const {message} = error;
      showToast(message);
      throw e;
    }
  };

  const requestPermission = useCallback(async () => {
    try {
      return await requestLocationPermission();
    } catch (e) {
      throw e;
    }
  }, []);

  const checkAndroidGPSEnabled = async () => {
    try {
      return await DeviceInfo.isLocationEnabled();
    } catch (e) {
      const error: LocationPermissionError = {
        name: 'ANDROID_GPS_ENABLE_CHECK_ERROR',
        message: '안드로이드 GPS 활성화 여부 확인 중 오류가 발생했습니다.',
      };
      throw error;
    }
  };

  const requestShopData = async ({
    latitude,
    longitude,
  }: RequestShopDataParams) => {
    try {
      const result = await kakaoSearchClosestShop({
        x: longitude,
        y: latitude,
      });
      setShops(result.documents);
    } catch (e) {
      const originalError = e as AxiosError;
      const error: LocationPermissionError = {
        name: 'KAKAO_SEARCH_API_ERROR',
        message: '가까운 매장을 찾는 중 오류가 발생했습니다.',
        stack: JSON.stringify(originalError),
      };

      throw error;
    }
  };

  return {isPermissionGranted};
};

export default useRequestShopList;
