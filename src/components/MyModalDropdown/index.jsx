import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { StyleSheet } from 'react-native';
import { scaleSizeH, scaleSizeW, setSpText } from '../../utils/index';
import Divider from "../../components/Divider";
/**
 * 下拉选择框
 * @param props
 * @constructor
 */
const MyModalDropdown = (props) => {
    const { children, options, onSelect, dropdownTextStyle, dropdownTextHighlightStyle, dropdownStyle, adjustFrame, } = props;
    return (<ModalDropdown options={options} onSelect={onSelect} dropdownTextStyle={[
            styles.dropdownTextStyle,
            dropdownTextStyle,
        ]} dropdownTextHighlightStyle={[styles.dropdownTextHighlightStyle, dropdownTextHighlightStyle]} dropdownStyle={[
            styles.dropdownStyle,
            dropdownStyle,
        ]} adjustFrame={adjustFrame} renderSeparator={() => <Divider />} showsVerticalScrollIndicator>
        {children}
      </ModalDropdown>);
};
const styles = StyleSheet.create({
    dropdownTextStyle: {
        fontSize: setSpText(13),
        lineHeight: scaleSizeH(20),
        textAlign: 'center',
        color: '#333'
    },
    dropdownTextHighlightStyle: {
        lineHeight: scaleSizeH(20),
        textAlign: 'center',
        color: '#fff',
        fontSize: setSpText(15),
        backgroundColor: '#1890ff',
    },
    dropdownStyle: {
        flex: 1,
        borderRadius: scaleSizeW(4),
        borderWidth: 1,
        borderColor: '#999',
        width: scaleSizeW(60),
    },
});
MyModalDropdown.defaultProps = {
    adjustFrame: (obj) => obj
};
export default MyModalDropdown;
