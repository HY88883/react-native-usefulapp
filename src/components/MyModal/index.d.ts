import React from 'react';
/**
 * 对话框
 */
declare class MyModal {
    static alert(title: string | React.ReactElement, message: string | React.ReactElement, onPress: (data: any) => void, data?: any): void;
}
export default MyModal;
