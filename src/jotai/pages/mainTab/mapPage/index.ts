import {Coordinate, DEFAULT_COORDINATES} from '@constants/location';
import {KakaoSearchClosestShopDocument} from '@utils/API';
import {atom} from 'jotai';

export const currentCoordinateAtom = atom<Coordinate>(DEFAULT_COORDINATES);

export const mapCoordinateAtom = atom<Coordinate>(DEFAULT_COORDINATES);

export const shopListAtom = atom<KakaoSearchClosestShopDocument[]>([]);

export const cameraMovedAtom = atom(false);
