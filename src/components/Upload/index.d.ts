import { PureComponent } from 'react';
import { StyleProp, ViewProps } from "react-native";
export interface Idata {
    link: string;
    domain: string;
    name: string;
    originalName: string;
    attachId: string;
}
interface IUploadState {
    fill: number;
    visible: boolean;
    fileList: Idata[];
    content: string;
}
interface IUpload {
    listType?: 'file' | 'picture-card';
    defaultFileList?: Idata[];
    onChange?: (fileList: Idata[]) => void;
    headers?: {
        [name: string]: string;
    };
    uploadContainer?: StyleProp<ViewProps>;
    remove?: boolean;
    download?: boolean;
    maxCount?: number;
    pictureCardView?: StyleProp<ViewProps>;
}
export declare function mkDir(defaultPath: string): Promise<any>;
export declare const headersOptions: {
    Accept: string;
    Authorization: string;
    'Content-Type': string;
    'Blade-Auth': string;
};
export declare const uploadUrl = "http://li.yunlink.win:16995/api/blade-resource/oss/endpoint/put-file-attach";
/**
 * 上传
 */
declare class Upload extends PureComponent<IUpload, IUploadState> {
    static defaultProps: {
        defaultFileList: never[];
        onChange: () => void;
        headers: {};
        uploadContainer: {};
        remove: boolean;
        download: boolean;
        listType: string;
        maxCount: number;
        pictureCardView: {};
    };
    state: {
        fill: number;
        visible: boolean;
        fileList: any;
        content: string;
    };
    handleUpload: (picker: any) => Promise<void>;
    handleError: (error: any) => void;
    onPress: (flag: any) => void;
    handleOperation: (ref: any, item: any, index: any) => void;
    handleDeleteFile: (index: any) => void;
    handleDownload: (item: any) => Promise<false | undefined>;
    get file(): any;
    get pictureCard(): any;
    render(): any;
}
export default Upload;
