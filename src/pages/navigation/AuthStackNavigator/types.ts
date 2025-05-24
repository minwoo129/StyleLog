import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export interface AuthStackNavigatorProps {}

export type AuthStackPageParams = {
  Login: undefined;
  Join: undefined;
};

export type AuthStackNavigation = StackNavigationProp<AuthStackPageParams>;

export type AuthStackPages = keyof AuthStackPageParams;

export type AuthStackRouteProp<T extends AuthStackPages> = RouteProp<
  AuthStackPageParams,
  T
>;
