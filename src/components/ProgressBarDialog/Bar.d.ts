import { Component } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
interface IBar {
    style: StyleProp<ViewStyle>;
    backgroundStyle: StyleProp<ViewStyle>;
    progress: number;
    fillStyle?: StyleProp<ViewStyle>;
    easing: (value: number) => number;
}
declare class Bar extends Component<IBar> {
    progress: any;
    static defaultProps: {
        style: any;
        easing: any;
    };
    UNSAFE_componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void;
    shouldComponentUpdate(): boolean;
    update(progress: any): void;
    render(): any;
}
export default Bar;
