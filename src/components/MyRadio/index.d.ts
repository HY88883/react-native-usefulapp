import { PureComponent } from 'react';
import { StyleProp, TextStyle } from "react-native";
interface IMyRadioItem {
    list: Array<Record<string | number | symbol, any>>;
    style?: StyleProp<TextStyle>;
    onChange?: (checked: boolean, item: object, index: number) => void;
    keyProp?: string | number | symbol;
    titleProp?: string | number | symbol;
    defaultIndex: number;
}
interface IMyRadioItemState {
    radioIndex: number;
}
/**
 * 单选按钮
 */
declare class MyRadio extends PureComponent<IMyRadioItem, IMyRadioItemState> {
    static defaultProps: {
        keyProp: string;
        titleProp: string;
        style: {};
        onChange: (params: any, item: any, index: any) => void;
        defaultIndex: number;
    };
    state: {
        radioIndex: number;
    };
    onChange: (checked: any, item: any, index: any) => void;
    render(): any;
}
export default MyRadio;
