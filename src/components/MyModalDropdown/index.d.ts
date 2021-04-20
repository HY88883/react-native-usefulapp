import React from 'react';
import { StyleProp, TextProps, ViewProps } from 'react-native';
interface frame {
    width: number;
    height: number;
    top: number;
    left: number;
    right: number;
}
interface ModalDropdownProps {
    options: Array<any> | undefined;
    onSelect: (index: number, value: any) => void;
    dropdownTextStyle?: StyleProp<TextProps>;
    dropdownTextHighlightStyle?: StyleProp<TextProps>;
    dropdownStyle?: StyleProp<ViewProps>;
    adjustFrame?: (frameValue: frame) => frame;
    children?: React.ReactNode;
}
/**
 * 下拉选择框
 * @param props
 * @constructor
 */
declare const MyModalDropdown: {
    (props: ModalDropdownProps): any;
    defaultProps: {
        adjustFrame: (obj: frame) => frame;
    };
};
export default MyModalDropdown;
