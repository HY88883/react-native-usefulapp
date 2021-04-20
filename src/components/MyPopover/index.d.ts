import React from 'react';
import { StyleProp, ViewProps } from 'react-native';
interface IPopover {
    blackStyle?: StyleProp<ViewProps>;
    arrow?: 'none' | 'topLeft' | 'top' | 'topRight' | 'rightTop' | 'right' | 'rightBottom' | 'bottomRight' | 'bottom' | 'bottomLeft' | 'leftBottom' | 'left' | 'leftTop';
    children: React.ReactChild;
}
declare const MyPopover: {
    (props: IPopover): any;
    defaultProps: {
        blackStyle: {};
        arrow: string;
    };
};
export default MyPopover;
