import React, {FC} from 'react';
import {AuthStackNavigatorProps, AuthStackPageParams} from './types';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '@pages/authStack/Login';
import Join from '@pages/authStack/Join';

const Stack = createStackNavigator<AuthStackPageParams>();
const AuthStackNavigator: FC<AuthStackNavigatorProps> = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Join" component={Join} />
    </Stack.Navigator>
  );
};

export default React.memo(AuthStackNavigator);
