import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export interface RootStackNavigatorProps {}

export type RootStackPageParams = {
  MainStackNavigator: undefined;
  AuthStackNavigator: undefined;
};

export type RootStackNavigation = StackNavigationProp<RootStackPageParams>;

export type RootStackPages = keyof RootStackPageParams;

export type RootStackRouteProp<T extends RootStackPages> = RouteProp<
  RootStackPageParams,
  T
>;
