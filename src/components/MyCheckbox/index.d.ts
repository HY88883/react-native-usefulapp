import { StyleProp, TextStyle } from 'react-native';
interface IMyCheckbox {
    list: Array<Record<string | number | symbol, any>>;
    keyProp?: string | number;
    titleProp?: string | number;
    checkboxStyle?: StyleProp<TextStyle>;
    onChange?: (checked: boolean, item: object, index: number) => void;
}
/**
 * 多选按钮
 * @param props
 * @constructor
 */
declare const MyCheckbox: {
    (props: IMyCheckbox): any;
    defaultProps: {
        keyProp: string;
        titleProp: string;
    };
};
export default MyCheckbox;
