import React, {Component, PureComponent} from 'react';
import {StyleSheet, View, Animated, Easing, StyleProp, ViewStyle} from 'react-native';
import {sideHeight} from "@/pages/Subcontractor/Home/Carousel";
import {scaleSizeH} from "@/utils/index";

interface  IBar{
  style: StyleProp<ViewStyle>;
    backgroundStyle:StyleProp<ViewStyle>;
    progress:number;
    fillStyle?:StyleProp<ViewStyle> ;
    easing:(value:number) =>number;
}

class Bar extends Component<IBar> {
  progress = new Animated.Value(this.props.progress || 0);

  static defaultProps = {
    style: styles,
    easing: Easing.in(Easing.cubic)
  };


  UNSAFE_componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {
      if (
          this.props.progress >= 0 &&
          this.props.progress !== nextProps.progress
      ) {
          this.update(nextProps.progress);
      }
  }

  shouldComponentUpdate() {
    return false;
  }

  update(progress) {
    Animated.spring(this.progress, {
      toValue: progress,
        useNativeDriver:true
    }).start();
  }

  render() {
    return (
      <View
        style={[
          styles.background,
          this.props.backgroundStyle,
          this.props.style,
        ]}>
        <Animated.View
          style={[
            styles.fill,
            this.props.fillStyle,
            {
              width: this.progress.interpolate({
                inputRange: [0, 100],
                outputRange: [
                  0 * this.props.style.width,
                  1 * this.props.style.width,
                ],
              }),
            },
          ]}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  background: {
    backgroundColor: '#bbbbbb',
    height: scaleSizeH(5),
    overflow: 'hidden',
  },
  fill: {
    backgroundColor: 'rgba(0, 122, 255, 1)',
    height: scaleSizeH(5),
  },
});

export default Bar;
