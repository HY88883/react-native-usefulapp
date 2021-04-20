import React, { PureComponent } from 'react';
import { GestureResponderEvent } from 'react-native';
import { PickerData } from "@ant-design/react-native/lib/picker/PropsType";
import { CascaderValue } from "@ant-design/react-native/lib/picker/cascader/CascaderTypes";
export declare const CustomChildren: (props: {
    onPress?: ((event: any) => void) | undefined;
    children?: any;
    extra?: string | undefined;
}) => any;
interface IMyPicker {
    data: PickerData[] | PickerData[][];
    cols: number;
    onChange?: (date?: CascaderValue) => void;
    extra?: string;
    title?: string;
}
interface IMyPickerState {
    value: Array<string | number>;
}
declare class MyPicker extends PureComponent<IMyPicker, IMyPickerState> {
    static defaultProps: {
        onChange: (value: any) => void;
        extra: string;
        title: string;
    };
    state: {
        value: never[];
    };
    onChange: (value: any) => void;
    render(): any;
}
export default MyPicker;
