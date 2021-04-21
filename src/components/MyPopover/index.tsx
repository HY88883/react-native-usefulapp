import React, {Component} from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from 'react-native';
import {AlbumView, Popover} from 'teaset';
import {scaleSizeW} from '../../utils/index';

interface IPopover {
  blackStyle?: StyleProp<ViewProps>;
  arrow?:
    | 'none'
    | 'topLeft'
    | 'top'
    | 'topRight'
    | 'rightTop'
    | 'right'
    | 'rightBottom'
    | 'bottomRight'
    | 'bottom'
    | 'bottomLeft'
    | 'leftBottom'
    | 'left'
    | 'leftTop';
  children: React.ReactChild;
}

const MyPopover = (props: IPopover) => {
  const {blackStyle, children, arrow} = props;
  return (
    <Popover
      style={[styles.blackStyle, styles.shadowStyle, blackStyle]}
      arrow={arrow}>
      <View>{children}</View>
    </Popover>
  );
};

const styles = StyleSheet.create({
  blackStyle: {
    backgroundColor: 'rgba(135, 206, 235, 0.8)',
    paddingVertical: scaleSizeW(8),
    paddingHorizontal: scaleSizeW(8),
    width: scaleSizeW(100),
  },
  shadowStyle: Platform.select({
    ios: {
      shadowColor: '#777',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 2,
    },
    android: {
      elevation: 2,
    },
  }),
});

MyPopover.defaultProps = {
  blackStyle: {},
  arrow: 'none',
};

export default MyPopover;
