import { PureComponent } from 'react';
import { NativeSyntheticEvent, StyleProp, TextInputSubmitEditingEventData, ViewProps } from 'react-native';
interface IMySearchInput {
    style?: StyleProp<ViewProps>;
    inputStyle?: StyleProp<ViewProps>;
    disabled?: boolean;
    iconSize?: number;
    defaultValue?: string;
    placeholder?: string;
    placeholderTextColor?: string;
    onChangeText?: (text: string) => void;
    onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
    multiline?: boolean;
}
interface IMySearchInputState {
    value: string;
}
/**
 * 搜索输入框
 */
declare class MySearchInput extends PureComponent<IMySearchInput, IMySearchInputState> {
    static defaultProps: {
        disabled: boolean;
        iconSize: number;
        value: string;
        defaultValue: string;
        placeholder: string;
        placeholderTextColor: string;
        onChangeText: undefined;
        onSubmitEditing: undefined;
        multiline: boolean;
    };
    state: {
        value: string;
    };
    onChangeText: (text: any) => void;
    render(): any;
}
export default MySearchInput;
