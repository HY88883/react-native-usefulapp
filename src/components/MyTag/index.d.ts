import { PureComponent } from 'react';
import { ImageStyle, StyleProp, ViewStyle, TextStyle } from 'react-native';
interface IMyTag {
    style?: StyleProp<ViewStyle>;
    onClose?: () => void | undefined;
    closable?: boolean;
    imageStyle?: StyleProp<ImageStyle>;
    checkable?: boolean;
    text?: string;
    textStyle: StyleProp<TextStyle>;
}
/**
 * 标签
 */
declare class MyTag extends PureComponent<IMyTag> {
    static defaultProps: {
        style: {};
        onClose: undefined;
        closable: boolean;
        imageStyle: {};
        Checkable: boolean;
        text: string;
        textStyle: {};
    };
    state: {
        containerStyle: {};
        checkedTextStyle: {};
    };
    onPress: () => void;
    render(): any;
}
export default MyTag;
