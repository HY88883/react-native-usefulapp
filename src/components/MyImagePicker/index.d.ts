import { Callback } from 'react-native-image-picker';
import { PureComponent } from 'react';
import { StyleProp, ViewProps } from 'react-native';
import { Idata } from '@/components/Upload';
export declare const MyImagePicker: {
    launchCamera: (callback: any) => void;
    launchImageLibrary: (callback: any) => void;
};
interface IImagePickerComponent {
    callback?: Callback;
    pickerView?: StyleProp<ViewProps>;
    type?: 'photo' | 'shoot';
    shootView?: StyleProp<ViewProps>;
    callback?: (value: Idata) => void;
    layout?: 'column' | 'row';
    maxCount?: number;
}
interface IImagePickerState {
    visible: boolean;
    fill: number;
    content: string;
    ImageList: Idata[];
}
/**
 * 选择本地图片或拍摄上传
 */
declare class ImagePickerComponent extends PureComponent<IImagePickerComponent, IImagePickerState> {
    static defaultProps: {
        callback: () => void;
        pickerView: {};
        type: string;
        shootView: {};
        layout: string;
        maxCount: number;
    };
    state: {
        visible: boolean;
        fill: number;
        content: string;
        ImageList: never[];
    };
    launchCamera: () => void;
    launchImageLibrary: () => void;
    uploadImage: (picker: any) => Promise<void>;
    onPress: () => void;
    onShootPress: () => void;
    get photo(): any;
    get shoot(): any;
    render(): any;
}
export default ImagePickerComponent;
