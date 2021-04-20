import { StyleProp, ViewProps } from 'react-native';
import { DataItem } from "@ant-design/react-native/lib/grid/PropsType";
interface IMyGrid {
    data?: Array<DataItem | undefined>;
    onPress?: (dataItem: DataItem | undefined, itemIndex: number) => void;
    containerStyle?: StyleProp<ViewProps>;
}
/**
 * 宫格
 * @param props
 * @constructor
 */
declare const MyGrid: {
    (props: IMyGrid): any;
    defaultProps: {
        data: never[];
        containerStyle: {};
    };
};
export default MyGrid;
