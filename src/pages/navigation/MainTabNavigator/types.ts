import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

export interface MainTabNavigatorProps {}

export type MainTabPageParams = {
  MainTabTestPage1: undefined;
  MainTabTestPage2: undefined;
  MainTabTestPage3: undefined;
};

export type MainTabNavigation = BottomTabNavigationProp<MainTabPageParams>;

export type MainTabPages = keyof MainTabPageParams;

export type MainTabRouteProp<T extends MainTabPages> = RouteProp<
  MainTabPageParams,
  T
>;
