import {FirestoreDocDataType, LogDataType} from '@constants/firebase/firestore';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export interface MainStackNavigatorProps {}

export type MainStackPageParams = {
  MainTabNavigator: undefined;
  LogDetail: {logData: FirestoreDocDataType<LogDataType>};
  MainStackTestPage1: undefined;
  MainStackTestPage2: {id: number; name: string};
};

export type MainStackNavigation = StackNavigationProp<MainStackPageParams>;

export type MainStackPages = keyof MainStackPageParams;

export type MainStackRouteProp<T extends MainStackPages> = RouteProp<
  MainStackPageParams,
  T
>;
