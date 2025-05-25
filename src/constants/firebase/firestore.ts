export type FirestoreCollectionType = 'test';

export type FirestoreDocDataType<T extends Record<string, any>> = {
  documentInfo: {
    documentId: string;
    collection: FirestoreCollectionType;
  };
} & T;
