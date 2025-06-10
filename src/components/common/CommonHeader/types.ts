import {ReactNode} from 'react';
import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type CommonHeaderElementDir = 'left' | 'center' | 'right';

export interface CommonHeaderProps {
  style?: StyleProp<ViewStyle>;
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}

export interface InsideGridProps {
  visible: boolean;
  dir: CommonHeaderElementDir;
  children: ReactNode;
}

export interface MultiElementsGridProps {
  dir: CommonHeaderElementDir;
  style?: StyleProp<ViewStyle>;
  visible?: boolean;
  children: ReactNode;
}

export interface BackBtnProps {
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  visible?: boolean;
}

export interface IconBtnProps {
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  source: ImageSourcePropType;
  visible?: boolean;
}

export interface HeaderTitleProps {
  style?: StyleProp<TextStyle>;
  text: string;
}
