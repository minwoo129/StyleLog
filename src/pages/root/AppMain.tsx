import {useNavigationActionHandler} from '@hooks/common/navigation';
import RootStackNavigator from '@pages/navigation/RootStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';

interface AppMainProps {}

const AppMain: FC<AppMainProps> = ({}) => {
  const {navigationRef, onNavigationStateChange} = useNavigationActionHandler();
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={onNavigationStateChange}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default React.memo(AppMain);
