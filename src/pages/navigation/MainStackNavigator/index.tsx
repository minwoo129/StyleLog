import React, {FC} from 'react';
import {MainStackNavigatorProps, MainStackPageParams} from './types';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabNavigator from '../MainTabNavigator';
import MainStackTestPage1 from '@pages/mainStack/MainStackTestPage1';
import MainStackTestPage2 from '@pages/mainStack/MainStackTestPage2';

const Stack = createStackNavigator<MainStackPageParams>();
const MainStackNavigator: FC<MainStackNavigatorProps> = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="MainTabNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
      <Stack.Screen name="MainStackTestPage1" component={MainStackTestPage1} />
      <Stack.Screen name="MainStackTestPage2" component={MainStackTestPage2} />
    </Stack.Navigator>
  );
};

export default React.memo(MainStackNavigator);
