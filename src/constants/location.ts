import {Coord} from '@mj-studio/react-native-naver-map';

export type Coordinate = Coord;

export interface LocationPermissionError extends Omit<Error, 'name'> {
  name:
    | 'PERMISSION_ERROR'
    | 'LOCATION_SEARCH_ERROR'
    | 'KAKAO_SEARCH_API_ERROR'
    | 'ANDROID_GPS_ENABLE_CHECK_ERROR';
}

export const DEFAULT_COORDINATES: Coordinate = {
  latitude: 37.56505,
  longitude: 126.977512,
};

/**
 * 현재 위치를 가져오는데 사용하는 API 타임아웃 시간(ms)
 */
export const GET_CURRENT_LOCATION_TIMEOUT = 10000;

/**
 * 현재 위치를 캐시하는 시간(ms)
 */
export const GET_CURRENT_LOCATION_CACHE_TIME = 0;
