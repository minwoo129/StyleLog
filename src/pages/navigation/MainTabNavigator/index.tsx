import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {MainTabNavigatorProps, MainTabPageParams} from './types';
import {
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import MainTabTestPage1 from '@pages/mainTab/MainTabTestPage1';
import MainTabTestPage2 from '@pages/mainTab/MainTabTestPage2';
import MainTabTestPage3 from '@pages/mainTab/MainTabTestPage3';

const Tab = createBottomTabNavigator<MainTabPageParams>();
const TAB_BAR_DEFAULT_HEIGHT = 56;

const MainTabNavigator: FC<MainTabNavigatorProps> = ({}) => {
  const insets = useSafeAreaInsets();
  let tabBarHeight = TAB_BAR_DEFAULT_HEIGHT;
  if (Platform.OS === 'ios') tabBarHeight += insets.bottom;
  return (
    <SafeAreaInsetsContext.Consumer>
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {insets => (
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <Tab.Navigator
            initialRouteName="MainTabTestPage1"
            backBehavior="none"
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: {
                width: '100%',
                height: tabBarHeight,
                backgroundColor: '#fff',
              },
              tabBarIconStyle: {
                flex: 1,
              },
              tabBarHideOnKeyboard: true,
            }}>
            <Tab.Screen name="MainTabTestPage1" component={MainTabTestPage1} />
            <Tab.Screen name="MainTabTestPage2" component={MainTabTestPage2} />
            <Tab.Screen name="MainTabTestPage3" component={MainTabTestPage3} />
          </Tab.Navigator>
        </KeyboardAvoidingView>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default React.memo(MainTabNavigator);
