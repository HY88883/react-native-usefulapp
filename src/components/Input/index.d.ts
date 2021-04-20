import React from 'react';
import { TextInputProps, StyleProp, ViewProps, TextStyle } from 'react-native';
import { FieldInputProps, FormikProps } from 'formik';
interface IProps extends TextInputProps {
    field?: FieldInputProps<any>;
    form?: FormikProps<any>;
    haveIcon?: boolean;
    container?: StyleProp<ViewProps>;
    inputStyle?: StyleProp<TextStyle>;
    icon?: React.ReactNode;
}
/**
 * 文本输入框
 * @param props
 * @constructor
 */
declare const Input: {
    (props: IProps): any;
    defaultProps: {
        haveIcon: boolean;
    };
};
export default Input;
