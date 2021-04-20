import { ColorValue, StyleProp, ViewProps } from 'react-native';
interface IDivider {
    lineHeight?: number;
    color?: ColorValue;
    style?: StyleProp<ViewProps>;
    type?: 'horizontal' | 'vertical';
}
/**
 * 分割线
 * @param props
 * @constructor
 */
declare const Divider: {
    (props: IDivider): any;
    defaultProps: {
        lineHeight: any;
        color: string;
        type: string;
    };
};
export default Divider;
