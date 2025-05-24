import {
  AuthStackNavigation,
  AuthStackPageParams,
} from './AuthStackNavigator/types';
import {
  MainStackNavigation,
  MainStackPageParams,
} from './MainStackNavigator/types';
import {MainTabNavigation, MainTabPageParams} from './MainTabNavigator/types';
import {
  RootStackNavigation,
  RootStackPageParams,
} from './RootStackNavigator/types';

export type NavigatorRouteTree = {
  RootStack: RootStackPageParams;
  MainStack: MainStackPageParams;
  AuthStack: AuthStackPageParams;
  MainTab: MainTabPageParams;
};

export type NavigationTree = {
  RootStack: RootStackNavigation;
  MainStack: MainStackNavigation;
  AuthStack: AuthStackNavigation;
  MainTab: MainTabNavigation;
};
