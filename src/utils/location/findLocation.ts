import {
  Coordinate,
  GET_CURRENT_LOCATION_CACHE_TIME,
  GET_CURRENT_LOCATION_TIMEOUT,
  LocationPermissionError,
} from '@constants/location';
import Geolocation, {
  GeolocationOptions,
} from '@react-native-community/geolocation';

export const findCurrentLocation = (): Promise<Coordinate> => {
  let options: GeolocationOptions = {
    timeout: GET_CURRENT_LOCATION_TIMEOUT,
    enableHighAccuracy: false,
    maximumAge: GET_CURRENT_LOCATION_CACHE_TIME,
  };
  return new Promise<Coordinate>((resolve, reject) => {
    Geolocation.getCurrentPosition(
      info => {
        const {latitude, longitude} = info.coords;
        resolve({latitude, longitude});
      },
      e => {
        console.error('Geolocation error:', e);
        let error: LocationPermissionError = {
          name: 'LOCATION_SEARCH_ERROR',
          message: '현재 위치를 가져오는 중 오류가 발생했습니다.',
          stack: e.message || 'internal error',
        };
        reject(error);
      },
      options,
    );
  });
};
