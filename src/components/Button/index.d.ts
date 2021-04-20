import { ReactNode } from 'react';
import { StyleProp, ViewStyle, GestureResponderEvent } from 'react-native';
interface ButtonProps {
    buttonStyle?: StyleProp<ViewStyle>;
    type?: 'icon';
    icon?: ReactNode;
    text?: string;
    textStyle?: StyleProp<ViewStyle>;
    loading?: boolean;
    disabled?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
}
/**
 * 按钮
 * @param props
 * @constructor
 */
declare const Button: (props: ButtonProps) => any;
export default Button;
