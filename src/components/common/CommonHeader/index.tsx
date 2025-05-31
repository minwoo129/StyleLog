import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  BackBtnProps,
  CommonHeaderProps,
  HeaderTitleProps,
  IconBtnProps,
  InsideGridProps,
  MultiElementsGridProps,
} from './types';
import {
  useCommonHeaderVisible,
  useInsideGrid,
  useMultiElementsGrid,
} from '@hooks/common/components/commonHeader';
import {Icon} from '@ui-kitten/components';

const CommonHeader: FC<CommonHeaderProps> = ({style, left, center, right}) => {
  const {leftVisible, centerVisible, rightVisible} = useCommonHeaderVisible({
    left,
    center,
    right,
  });

  return (
    <View style={[styles.container, style]}>
      <InsideGrid visible={leftVisible} dir="left">
        {left}
      </InsideGrid>
      <InsideGrid visible={centerVisible} dir="center">
        {center}
      </InsideGrid>
      <InsideGrid visible={rightVisible} dir="right">
        {right}
      </InsideGrid>
    </View>
  );
};

const InsideGrid = ({visible, dir, children}: InsideGridProps) => {
  const {additionalStyle} = useInsideGrid(dir);
  if (!visible) {
    return null;
  }

  return <View style={[styles.insideGrid, additionalStyle]}>{children}</View>;
};

export const MultiElementsGrid = ({
  dir,
  style,
  visible = true,
  children,
}: MultiElementsGridProps) => {
  const {additionalStyle} = useMultiElementsGrid(dir);
  if (!visible) {
    return null;
  }

  return (
    <View style={[styles.multiElementsGrid, additionalStyle, style]}>
      {children}
    </View>
  );
};

export const BackBtn = ({
  onPress,
  disabled = false,
  style,
  visible = true,
}: BackBtnProps) => {
  if (!visible) {
    return null;
  }

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={style}>
      <Icon name="arrow-back-outline" fill={'#0e0b0a'} style={styles.btnIcon} />
    </TouchableOpacity>
  );
};

export const IconBtn = ({
  onPress,
  source,
  disabled = false,
  style,
  visible = true,
}: IconBtnProps) => {
  if (!visible) {
    return null;
  }

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={style}>
      <Image source={source} style={styles.btnIcon} />
    </TouchableOpacity>
  );
};

export const HeaderTitle = ({style, text}: HeaderTitleProps) => {
  return <Text style={[styles.headerTitle, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  insideGrid: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  multiElementsGrid: {
    flex: 1,
    flexDirection: 'row',
  },
  btnIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 18,
    color: '#2c2c2e',
    letterSpacing: -0.45,
    includeFontPadding: false,
    padding: 0,
  },
});

export default React.memo(CommonHeader);
