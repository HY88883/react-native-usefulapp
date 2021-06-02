import React, {PureComponent} from 'react';
import {NativeSyntheticEvent, StyleProp, StyleSheet, TextInputSubmitEditingEventData, ViewStyle,TextStyle} from 'react-native';
import {scaleSizeH, scaleSizeW, setSpText} from '../../utils/index';
import SearchInput from "./SearchInput/SearchInput";

interface IMySearchInput {
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  iconSize?: number;
  defaultValue?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  multiline?: boolean;
}

interface IMySearchInputState{
    value:string;
}

/**
 * 搜索输入框
 */
class MySearchInput extends PureComponent<IMySearchInput,IMySearchInputState> {

  static defaultProps = {
      disabled:false,
      iconSize:15,
      placeholder:'请输入' ,
      placeholderTextColor:'#999',
      multiline:false
  }

  state={
      value:''
  }

    onChangeText=text=>{
      this.setState({value:text})
        const {onChangeText}=this.props
        !!onChangeText&&onChangeText(text)
    }

  render() {
      const {defaultValue,disabled,style,placeholderTextColor,placeholder,iconSize,multiline,inputStyle,onSubmitEditing,
      }=this.props
      const {value}=this.state
    return (
        <SearchInput
          style={[styles.style,style]}
          inputStyle={[styles.inputStyle,inputStyle]}
          disabled={disabled}
          iconSize={iconSize}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onChangeText={this.onChangeText}
          onSubmitEditing={onSubmitEditing}
          multiline={multiline}
          selectionColor={'#555'}
        />
    );
  }
}

const styles=StyleSheet.create({
    style:{
        width: scaleSizeW(350),
        height: scaleSizeH(30),
        backgroundColor: '#F6F6F6',
        borderColor: '#F6F6F6',
        borderRadius: scaleSizeW(20),
    },
    inputStyle:{
        color: '#333',
        fontSize: setSpText(14),
        width: scaleSizeW(200),
    }
})

export default MySearchInput;
