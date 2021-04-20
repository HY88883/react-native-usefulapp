import React, { PureComponent } from 'react';
interface IModalDialog {
    _dialogTitle?: string;
    _dialogContent?: React.ReactElement;
    _dialogLeftBtnTitle?: string;
    _dialogRightBtnTitle?: string;
    _dialogVisible?: boolean;
    _dialogRightBtnAction: () => void;
    _dialogLeftBtnAction: () => void;
}
/**
 * 模态对话框
 */
declare class ModalDialog extends PureComponent<IModalDialog> {
    static defaultProps: {
        _dialogTitle: string;
        _dialogContent: null;
        _dialogLeftBtnTitle: string;
        _dialogRightBtnTitle: string;
        _dialogVisible: boolean;
        _dialogLeftBtnAction: () => void;
        _dialogRightBtnAction: () => void;
    };
    render(): any;
}
export default ModalDialog;
