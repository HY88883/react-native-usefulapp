import { LeafClickProps, TreeItem } from 'react-native-tree-select';
import { StyleProp, TextStyle } from 'react-native';
interface IMyTreeSelect {
    data: TreeItem[];
    onClick?: () => void;
    onClickLeaf?: (p: LeafClickProps) => void;
    isOpen?: boolean;
    itemStyle?: StyleProp<TextStyle>;
    selectedItemStyle?: StyleProp<TextStyle>;
    leafCanBeSelected?: boolean;
    defaultSelectedId?: string[];
    selectType?: 'single' | 'multiple';
}
/**
 * 树形控件
 * @param props
 * @constructor
 */
declare const MyTreeSelect: {
    (props: IMyTreeSelect): any;
    defaultProps: {
        onClick: () => void;
        onClickLeaf: (p: any) => void;
        isOpen: boolean;
        itemStyle: {};
        selectedItemStyle: {};
        leafCanBeSelected: boolean;
        defaultSelectedId: string[];
        selectType: string;
    };
};
export default MyTreeSelect;
