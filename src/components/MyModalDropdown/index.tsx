import React, {FC, PureComponent} from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import {ActivityIndicator, StyleProp, StyleSheet, TextProps, ViewProps} from 'react-native';
import {scaleSizeH, scaleSizeW, setSpText} from '../../utils/index';
import Divider from "../../components/Divider";

interface frame{
  width:number; height:number; top:number; left:number; right:number;
}

interface ModalDropdownProps {
  options: Array<any> | undefined;
  onSelect: (index: number, value: any) => void;
  dropdownTextStyle?: StyleProp<TextProps>;
  dropdownTextHighlightStyle?: StyleProp<TextProps>;
  dropdownStyle?: StyleProp<ViewProps>;
  adjustFrame?: (frameValue: frame) => frame;
  renderRow?: (option: any, index: string, isSelected: boolean) => React.ReactNode;
}

/**
 * 下拉选择框
 * @param props
 * @constructor
 */
const MyModalDropdown:FC<ModalDropdownProps>=(props)=>{
  const {
    children,
    options,
    onSelect,
    dropdownTextStyle,
    dropdownTextHighlightStyle,
    dropdownStyle,
    adjustFrame,
    renderRow,
      ...rest
  } = props;
  return (
      <ModalDropdown
          options={options}
          onSelect={onSelect}
          renderRow={renderRow}
          dropdownTextStyle={[
            styles.dropdownTextStyle,
            dropdownTextStyle,
          ]}
          dropdownTextHighlightStyle={
            [styles.dropdownTextHighlightStyle,dropdownTextHighlightStyle]
          }
          dropdownStyle={[
            styles.dropdownStyle,
            dropdownStyle,
          ]}
          adjustFrame={adjustFrame}
          renderSeparator={()=><Divider/>}
          showsVerticalScrollIndicator
          {...rest}
      >
        {children}
      </ModalDropdown>
  );
}

const styles = StyleSheet.create({
  dropdownTextStyle: {
    fontSize: setSpText(13),
    lineHeight: scaleSizeH(20),
    textAlign: 'center',
    color: '#333',
    padding:scaleSizeW(2)
  },
  dropdownTextHighlightStyle: {
    lineHeight: scaleSizeH(20),
    textAlign: 'center',
    color: '#fff',
    fontSize: setSpText(15),
    backgroundColor: '#1890ff',
    padding:scaleSizeW(2)
  },
  dropdownStyle: {
    flex: 1,
    borderRadius: scaleSizeW(4),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    width: scaleSizeW(70),
  },
})

MyModalDropdown.defaultProps = {
  adjustFrame: (obj: frame) => obj,
}

export default MyModalDropdown;
