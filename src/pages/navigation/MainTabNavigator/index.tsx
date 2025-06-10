/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {MainTabNavigatorProps, MainTabPageParams} from './types';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import UserStyleLogPage from '@pages/mainTab/UserStyleLogPage';
import MapPage from '@pages/mainTab/MapPage';
import MyPage from '@pages/mainTab/MyPage';
import BottomTabBar from '@components/pages/navigation/BottomTabBar';

const Tab = createBottomTabNavigator<MainTabPageParams>();

const MainTabNavigator: FC<MainTabNavigatorProps> = ({}) => {
  return (
    <SafeAreaInsetsContext.Consumer>
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {insets => (
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <Tab.Navigator
            initialRouteName="UserStyleLogPage"
            backBehavior="none"
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarHideOnKeyboard: true,
            }}
            tabBar={props => <BottomTabBar {...props} />}>
            <Tab.Screen name="UserStyleLogPage" component={UserStyleLogPage} />
            <Tab.Screen name="MapPage" component={MapPage} />
            <Tab.Screen name="MyPage" component={MyPage} />
          </Tab.Navigator>
        </KeyboardAvoidingView>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default React.memo(MainTabNavigator);
