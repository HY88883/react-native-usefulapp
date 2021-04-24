import React, {FC} from "react";
import {StyleSheet} from "react-native";
import {scaleSizeW, setSpText} from "../../utils/index";
import {Select} from 'teaset'

interface IMySelect {
    value?:any;
    items?:any[];
    getItemValue?:(item:any,index:number)=>void;
    getItemText?:(item:any,index:number)=>void;
    placeholder?:string;
    pickerTitle?:string;
    onSelected?:(item:any,index:number)=>void;
    pickerType?:'auto'|'pull'|'popover'
}

/**
 * 选择框
 * @param props
 * @constructor
 */
const MySelect:FC<IMySelect>=(props)=>{
    const {value,items,getItemValue,getItemText,placeholder,pickerTitle,onSelected,pickerType}=props;

    return <Select
        style={styles.containerinput}
        value={value}
        valueStyle={styles.valueStyle}
        items={items}
        getItemValue={getItemValue}
        getItemText={getItemText}
        iconTintColor="#333"
        placeholder={placeholder}
        pickerTitle={pickerTitle}
        placeholderTextColor={'#999'}
        onSelected={onSelected}
        pickerType={pickerType}
    />
}

MySelect.defaultProps = {
    items:[],
    value:'',
    placeholder:'请选择',
    pickerTitle:'请选择',
    pickerType:'auto'
}

const styles = StyleSheet.create({
    containerinput: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#222',
        borderRadius: scaleSizeW(2),
        backgroundColor: '#fff',
        flex: 1,
    },
    valueStyle: {
        flex: 1,
        color: '#222',
        textAlign: 'left',
        fontSize: setSpText(13),
    },
})

export default MySelect
