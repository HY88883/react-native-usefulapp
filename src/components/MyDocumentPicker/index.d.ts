/**
 * 本地文件选择器
 */
declare let MyDocumentPicker: {
    FileTypes: any[];
    pickerSingleFile: (callback: (value: any) => void, errorCallback: (value: any) => void, FileTypes?: any) => void;
    PickMultipleFiles: (callback: (value: any) => void, errorCallback: (value: any) => void, FileTypes?: any) => void;
};
export default MyDocumentPicker;
