import React, {PureComponent} from 'react';
import {GestureResponderEvent, StyleSheet, Text, View,} from 'react-native';
import {scaleSizeH, setSpText} from '@/utils/index';
import {Picker} from '@ant-design/react-native';
import Touchable from "@/components/Touchable";
import {PickerData} from "@ant-design/react-native/lib/picker/PropsType";
import {CascaderValue} from "@ant-design/react-native/lib/picker/cascader/CascaderTypes";

export const CustomChildren = (props: { onPress?:(event: GestureResponderEvent) => void, children?: React.ReactNode; extra?: string}) =>{
    return <Touchable onPress={props.onPress}>
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: scaleSizeH(50),
            }}>
            <Text style={{ fontWeight: '600',
                textAlign: 'left',
                fontSize: setSpText(13),
                color: '#333333',}}>
                {props.children}
            </Text>
                <Text style={{textAlign: 'right',
                    fontSize: setSpText(13),color:props.extra&&props.extra.includes('请选择')?'#999999':'#333333'}}>{props.extra}</Text>
        </View>
    </Touchable>
}

interface  IMyPicker {
data:PickerData[] | PickerData[][];
    cols:number;
    onChange?:(date?: CascaderValue) => void;
    extra?:string;
    title?:string;
}

interface IMyPickerState{
value:Array<string | number>;
}

//选择器 eg.省市区
class MyPicker extends PureComponent<IMyPicker,IMyPickerState> {
    static defaultProps = {
        onChange:value=>{},
        extra:'请选择',
        title:''
    }

    state={
        value:[]
    }
    onChange = (value: any) => {
        this.setState({value:[...value]})
        if(this.props.onChange){
            this.props.onChange(value)
        }
    };


    render() {
        const {cols,data,extra,title}=this.props
        const {value}=this.state
        return (
                    <Picker
                        data={data}
                        cols={cols}
                        value={value}
                        onChange={this.onChange}
                        extra={extra}
                        >
                        <CustomChildren>{title}</CustomChildren>
                    </Picker>
        )
    }
}

export default MyPicker;
