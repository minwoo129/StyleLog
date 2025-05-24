import {NavigationTree, NavigatorRouteTree} from '@pages/navigation/types';
import {
  RouteProp,
  useNavigation,
  useNavigationContainerRef,
  useRoute,
} from '@react-navigation/native';
import {useState} from 'react';

export const useNavigationActionHandler = () => {
  const [prevPage, setPrevPage] = useState('');
  const navigationRef = useNavigationContainerRef();

  const onNavigationStateChange = () => {
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

    if (currentRouteName && prevPage !== currentRouteName) {
      setPrevPage(currentRouteName);
      // Analytics의 스크린 트래킹 등을 사용할 경우 여기에 Analytics 이벤트를 실행하면 됨
    }
  };

  return {navigationRef, onNavigationStateChange};
};

export const useAppRoute: <
  T extends keyof NavigatorRouteTree,
  S extends keyof NavigatorRouteTree[T],
>(
  type: T,
  page: S,
) => RouteProp<NavigatorRouteTree[T], S> = useRoute;

export const useAppNavigation: <T extends keyof NavigationTree>(
  type: T,
) => NavigationTree[T] = useNavigation;
