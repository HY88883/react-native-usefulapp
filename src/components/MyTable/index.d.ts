import { PureComponent } from 'react';
import { StyleProp, TextStyle, ViewStyle } from "react-native";
interface IMyTable {
    optionsChange: {
        tableHead: any[];
        tableData: any[][];
    };
    flexArr: number[];
    borderStyle?: StyleProp<ViewStyle>;
    table?: StyleProp<ViewStyle>;
    rowStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}
/**
 * 表格
 */
declare class MyTable extends PureComponent<IMyTable> {
    static defaultProps: {
        borderStyle: {};
        table: {};
        rowStyle: {};
        textStyle: {};
    };
    render(): any;
}
export default MyTable;
