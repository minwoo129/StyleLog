import {CommonHeaderElementDir} from '@components/common/CommonHeader/types';
import {ReactNode, useMemo} from 'react';
import {ViewStyle} from 'react-native';

interface UseCommonHeaderVisibleProps {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}
export const useCommonHeaderVisible = ({
  left,
  center,
  right,
}: UseCommonHeaderVisibleProps) => {
  const leftVisible = useMemo(() => {
    if (left) return true;

    return right && center ? true : false;
  }, [left, right, center]);
  const centerVisible = useMemo(() => {
    return center ? true : false;
  }, [center]);
  const rightVisible = useMemo(() => {
    if (right) return true;

    return left && center ? true : false;
  }, [left, right, center]);

  return {
    leftVisible,
    centerVisible,
    rightVisible,
  };
};

export const useInsideGrid = (dir: CommonHeaderElementDir) => {
  const additionalStyle = useMemo(() => {
    let additionalStyle: ViewStyle = {};
    if (dir === 'left') {
      additionalStyle = {justifyContent: 'flex-start'};
      return additionalStyle;
    }

    if (dir === 'center') {
      additionalStyle = {justifyContent: 'center'};
      return additionalStyle;
    }

    additionalStyle = {justifyContent: 'flex-end'};
    return additionalStyle;
  }, [dir]);

  return {
    additionalStyle,
  };
};

export const useMultiElementsGrid = (dir: CommonHeaderElementDir) => {
  const additionalStyle = useMemo(() => {
    let additionalStyle: ViewStyle = {};
    if (dir === 'left') {
      additionalStyle = {justifyContent: 'flex-start'};
      return additionalStyle;
    }
    if (dir === 'center') {
      additionalStyle = {justifyContent: 'center'};
      return additionalStyle;
    }
    additionalStyle = {justifyContent: 'flex-end'};
    return additionalStyle;
  }, [dir]);

  return {
    additionalStyle,
  };
};
