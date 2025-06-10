import {LocationPermissionError} from '@constants/location';
import {Platform} from 'react-native';
import {
  LocationAccuracy,
  PERMISSIONS,
  request,
  requestLocationAccuracy,
} from 'react-native-permissions';

type LocationPermisionStatus =
  | LocationPermissionStatusAndroid
  | LocationPermissionStatusIOS;

type LocationPermissionStatusAndroid =
  | GrantedStatusType<'android'>
  | DeniedStatusType<'android'>;

type LocationPermissionStatusIOS =
  | GrantedStatusForIOS
  | DeniedStatusType<'ios'>;

type GrantedStatusForIOS = GrantedStatusType<'ios'> & {
  accuracyStatus: LocationAccuracy;
};

type GrantedStatusType<T = string> = {
  status: 'granted';
  platform: T;
};

type DeniedStatusType<T = string> = {
  status: 'denied' | 'blocked' | 'unavailable' | 'limited';
  reason: string;
  platform: T;
};

/**
 * 위치 권한 요청 기능
 * @returns {Promise<LocationPermisionStatus>} 위치 권한 상태
 * @throws {Error} 권한 요청 중 오류 발생 시
 *
 * @description 운영체제에 따라 반환값이 달라질 수 있음(status, platform 등은 모두 동일)
 */
export const requestLocationPermission =
  async (): Promise<LocationPermisionStatus> => {
    try {
      if (Platform.OS === 'android') {
        return await checkAndroidPermission();
      }

      return await checkIOSPermission();
    } catch (e) {
      let error: LocationPermissionError = {
        name: 'PERMISSION_ERROR',
        message: '위치 권한 요청 중 오류가 발생했습니다.',
      };
      throw error;
    }
  };

const checkAndroidPermission =
  async (): Promise<LocationPermissionStatusAndroid> => {
    try {
      const status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (status === 'denied') {
        return {
          status,
          platform: 'android',
          reason: 'permission denied',
        };
      }
      if (status === 'blocked') {
        return {
          status,
          platform: 'android',
          reason: 'permission blocked',
        };
      }
      if (status === 'unavailable') {
        return {
          status,
          platform: 'android',
          reason: 'feature unavailable',
        };
      }
      // 위치 관련 권한요청에는 limited라는 값이 뜰 수 없음 => 타입 검사 때문에 추가한 분기 코드
      if (status === 'limited') {
        return {
          status,
          platform: 'android',
          reason: 'permission limited',
        };
      }
      return {status, platform: 'android'};
    } catch (e) {
      throw e;
    }
  };

const checkIOSPermission = async (): Promise<LocationPermissionStatusIOS> => {
  try {
    const status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    if (status === 'blocked') {
      return {
        status,
        platform: 'ios',
        reason: 'permission blocked',
      };
    }
    if (status === 'denied') {
      return {
        status,
        platform: 'ios',
        reason: 'permission denied',
      };
    }
    if (status === 'unavailable') {
      return {
        status,
        platform: 'ios',
        reason: 'feature unavailable',
      };
    }
    // 위치 관련 권한요청에는 limited라는 값이 뜰 수 없음 => 타입 검사 때문에 추가한 분기 코드
    if (status === 'limited') {
      return {
        status,
        platform: 'ios',
        reason: 'permission limited',
      };
    }

    const accuracyStatus = await requestLocationAccuracy({
      purposeKey: 'LocationRequestPurpose',
    });

    return {status, platform: 'ios', accuracyStatus};
  } catch (e) {
    throw e;
  }
};
