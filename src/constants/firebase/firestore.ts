export type FirestoreCollectionType = 'test' | 'users';

export type FirestoreDocDataType<T extends Record<string, any>> = {
  documentInfo: {
    documentId: string;
    collection: FirestoreCollectionType;
  };
} & T;

export type SocialType = 'google' | 'apple' | 'kakao' | 'naver';

export type UserType = {
  email: string;
  expiredAt: string | null;
  name: string;
  profileImg: string | null;
  socialType: SocialType;
};

export type ShopType = {
  name: string;
  phoneNum: string;
  address: string;
  latitude: string;
  longitude: string;
  createdAt: string;
  updatedAt: string;
};

export type DesignerType = {
  name: string;
  likeCnt: number;
  shopId: string;
  createdAt: string;
  updatedAt: string;
};

export type LikeType = {
  createdAt: string;
  updatedAt: string;
  logId: string;
  userId: string;
  designerId: string;
};

export type LogDataType = {
  createdAt: string;
  updatedAt: string;
  userId: string;
  photoURL: string;
  designerId: string;
};
