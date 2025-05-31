import React, {FC} from 'react';
import {BottomTabBarProps as NativeBottomTabBarProps} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import {ImageProps} from 'react-native';

interface BottomTabBarProps extends NativeBottomTabBarProps {}

const BottomTabBar: FC<BottomTabBarProps> = ({state, navigation}) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title={'StyleLog'} icon={ImageIcon} />
      <BottomNavigationTab title={'Map'} icon={MapIcon} />
      <BottomNavigationTab title={'MyInfo'} icon={MyInfoIcon} />
    </BottomNavigation>
  );
};

const ImageIcon = (props: Partial<ImageProps> | undefined) => {
  return <Icon {...props} name="image-outline" />;
};

const MapIcon = (props: Partial<ImageProps> | undefined) => {
  return <Icon {...props} name="map-outline" />;
};
const MyInfoIcon = (props: Partial<ImageProps> | undefined) => {
  return <Icon {...props} name="person-outline" />;
};

export default React.memo(BottomTabBar);
