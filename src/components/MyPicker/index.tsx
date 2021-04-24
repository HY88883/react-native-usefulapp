import React, {PureComponent} from 'react';
import {GestureResponderEvent, Image, StyleSheet, Text, View} from 'react-native';
import {scaleSizeH, scaleSizeW, setSpText} from '../../utils/index';
import {Picker} from '@ant-design/react-native';
import Touchable from '../../components/Touchable';
import {PickerData} from '@ant-design/react-native/lib/picker/PropsType';
import {CascaderValue} from '@ant-design/react-native/lib/picker/cascader/CascaderTypes';

export const CustomChildren = (props: {
  onPress?: (event: GestureResponderEvent) => void;
  children?: React.ReactNode;
  extra?: string;
}) => {
  return (
    <Touchable onPress={props.onPress}>
      <View
        style={styles.view}>
        <Text
          style={styles.leftText}>
          {props.children}
        </Text>
       <View style={styles.rightView}>
           <Text
               style={{
                   textAlign: 'right',
                   fontSize: setSpText(14),
                   color:
                       props.extra && props.extra.includes('请选择')
                           ? '#999999'
                           : '#333333',
               }}>
               {props.extra}
           </Text>
           <Image source={require('./assets/arrow.png')} style={styles.rightIcon}/>
       </View>
      </View>
    </Touchable>)
}

interface IMyPicker {
  data: PickerData[] | PickerData[][];
  cols: number;
  onChange?: (date?: CascaderValue) => void;
  extra?: string;
  title?: string;
}

interface IMyPickerState {
  value: Array<string | number>;
}

//选择器 eg.省市区
class MyPicker extends PureComponent<IMyPicker, IMyPickerState> {
  static defaultProps = {
    extra: '请选择',
  };

  state = {
    value: [],
  };
  onChange = (value?: CascaderValue) => {
    this.setState({value: [...value]});
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  render() {
    const {cols, data, extra, title} = this.props;
    const {value} = this.state;
    return (
      <Picker
        data={data}
        cols={cols}
        value={value}
        onChange={this.onChange}
        extra={extra}>
        <CustomChildren>{title}</CustomChildren>
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
    rightView:{
        flexDirection:'row',
        alignItems:'center'
    },
    rightIcon:{
        width:scaleSizeW(12),
        height:scaleSizeW(12),
        marginLeft : scaleSizeW(5),
    },
    view:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: scaleSizeH(50),
    },
    leftText:{
        fontWeight: '600',
        textAlign: 'left',
        fontSize: setSpText(14),
        color: '#333333',
    }
})

export default MyPicker;
