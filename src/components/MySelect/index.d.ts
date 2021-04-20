interface IMySelect {
    value?: any;
    items?: any[];
    getItemValue?: (item: any, index: number) => void;
    getItemText?: (item: any, index: number) => void;
    placeholder?: string;
    pickerTitle?: string;
    onSelected?: (item: any, index: number) => void;
    pickerType?: 'auto' | 'pull' | 'popover';
}
/**
 * 选择框
 * @param props
 * @constructor
 */
declare const MySelect: {
    (props: IMySelect): any;
    defaultProps: {
        items: never[];
        value: string;
        placeholder: string;
        pickerTitle: string;
        pickerType: string;
    };
};
export default MySelect;
