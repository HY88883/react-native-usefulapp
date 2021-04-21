import React, { Component } from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';
import { scaleSizeH } from "../../utils/index";
class Bar extends Component {
    constructor() {
        super(...arguments);
        this.progress = new Animated.Value(this.props.progress || 0);
    }
    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.progress >= 0 &&
            this.props.progress !== nextProps.progress) {
            this.update(nextProps.progress);
        }
    }
    shouldComponentUpdate() {
        return false;
    }
    update(progress) {
        Animated.spring(this.progress, {
            toValue: progress,
            useNativeDriver: true
        }).start();
    }
    render() {
        return (<View style={[
                styles.background,
                this.props.backgroundStyle,
                this.props.style,
            ]}>
        <Animated.View style={[
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
            ]}/>
      </View>);
    }
}
Bar.defaultProps = {
    style: styles,
    easing: Easing.in(Easing.cubic)
};
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
