import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export interface MainStackNavigatorProps {}

export type MainStackPageParams = {
  MainTabNavigator: undefined;
  MainStackTestPage1: undefined;
  MainStackTestPage2: {id: number; name: string};
};

export type MainStackNavigation = StackNavigationProp<MainStackPageParams>;

export type MainStackPages = keyof MainStackPageParams;

export type MainStackRouteProp<T extends MainStackPages> = RouteProp<
  MainStackPageParams,
  T
>;
