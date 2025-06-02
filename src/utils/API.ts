import {AxiosRequestConfig} from 'axios';
import {http} from './http';
import {KAKAO_SECURE_INFO} from '@config';

export const testAPI = (id: number) => {
  return http.get<{id: number; name: string}>(`/test/${id}`);
};

export const kakaoSearchClosestShop = ({
  x,
  y,
  page = 1,
}: KakaoSearchShopRequest) => {
  let config: AxiosRequestConfig = {
    headers: {
      Authorization: KAKAO_SECURE_INFO.kakaoRestAPIKey,
    },
    params: {
      x,
      y,
      page,
      size: 15,
      query: '미용실',
    },
  };
  console.log('kakaoSearchClosestShop config:', config);
  return http.get<KakaoSearchClosestShopResponse>(
    'https://dapi.kakao.com/v2/local/search/keyword.json',
    config,
  );
};

// =================================================================================
interface KakaoSearchShopRequest {
  /** 경도 */
  x: number;
  /** 위도 */
  y: number;
  /** 페이지 번호(디폴트: 1) */
  page?: number;
}
export interface KakaoSearchClosestShopResponse {
  documents: KakaoSearchClosestShopDocument[];
  meta: KakaoSearchClosestShopMetadata;
}

export interface KakaoSearchClosestShopDocument {
  /** 장소명 */
  place_name: string;
  /** 중심좌표까지의 거리(x,y 파라미터를 준 경우에만 존재) */
  distance: string;
  /** 장소 상세페이지 URL(카카오맵) */
  place_url: string;
  /** 카테고리 이름 */
  category_name: string;
  /** 전체 지번 주소 */
  address_name: string;
  /** 전체 도로명 주소 */
  road_address_name: string;
  /** 장소 ID(카카오 제공 데이터) */
  id: string;
  /** 전화번호 */
  phone: string;
  /** 중요 카테고리만 그룹핑한 카테고리 그룹 코드 */
  category_group_code: string;
  /** 중요 카테고리만 그룹핑한 카테고리 그룹명 */
  category_group_name: string;
  /** x좌표값(경도) */
  x: string;
  /** y좌표값(위도) */
  y: string;
}

interface KakaoSearchClosestShopMetadata {
  /** 현재 페이지가 마지막인지 여부 */
  is_end: boolean;
  /** total_count 중 노출 가능 문서수(최대: 45) */
  pageable_count: number;
  /** 질의어의 지역 및 키워드 분석 정보 */
  same_name: {
    /** 질의어에서 지역정보를 제외한 키워드 */
    keyword: string;
    /** 질의어에서 인식된 지역의 리스트 */
    region: string[];
    /** 인식된 지역 리스트 중, 현재 검색에 사용된 지역정보 */
    selected_region: string;
  };
  /** 검색어에 검색된 문서수 */
  total_count: number;
}
