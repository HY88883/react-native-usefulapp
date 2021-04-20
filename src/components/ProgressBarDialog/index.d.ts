import { PureComponent } from 'react';
interface IProgressBarDialog {
    animationType?: 'none' | 'slide' | 'fade';
    transparent?: boolean;
    progressModalVisible: boolean;
    progress?: number;
    onShow?: () => {};
    onRequestClose: () => {};
    onOutSidePress?: () => {};
    title?: string;
    cancleText?: string;
    canclePress: () => {};
    needCancle: boolean;
}
declare class ProgressBarDialog extends PureComponent<IProgressBarDialog> {
    static defaultProps: {
        animationType: string;
        transparent: boolean;
        progressModalVisible: boolean;
        onShow: () => void;
        onRequestClose: () => void;
        onOutSidePress: () => void;
        title: string;
        cancleText: string;
        canclePress: () => void;
        needCancle: boolean;
        progress: number;
    };
    render(): any;
}
export default ProgressBarDialog;
