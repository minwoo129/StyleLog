import React, {FC, useContext} from 'react';
import {RootStackNavigatorProps, RootStackPageParams} from './types';
import {createStackNavigator} from '@react-navigation/stack';
import MainStackNavigator from '../MainStackNavigator';
import AuthStackNavigator from '../AuthStackNavigator';
import AppStateContext from '@contexts/common/AppStateContext';

const Stack = createStackNavigator<RootStackPageParams>();

const RootStackNavigator: FC<RootStackNavigatorProps> = ({}) => {
  const {loginUser} = useContext(AppStateContext);
  return (
    <Stack.Navigator
      initialRouteName={loginUser ? 'MainStackNavigator' : 'AuthStackNavigator'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainStackNavigator" component={MainStackNavigator} />
      <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
    </Stack.Navigator>
  );
};

export default React.memo(RootStackNavigator);
