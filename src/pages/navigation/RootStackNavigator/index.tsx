import React, {FC} from 'react';
import {RootStackNavigatorProps, RootStackPageParams} from './types';
import {createStackNavigator} from '@react-navigation/stack';
import MainStackNavigator from '../MainStackNavigator';
import AuthStackNavigator from '../AuthStackNavigator';

const Stack = createStackNavigator<RootStackPageParams>();

const RootStackNavigator: FC<RootStackNavigatorProps> = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="MainStackNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainStackNavigator" component={MainStackNavigator} />
      <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
    </Stack.Navigator>
  );
};

export default React.memo(RootStackNavigator);
