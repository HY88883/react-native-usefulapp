import React, {FC} from 'react';
import {View, Text, StyleSheet, TextInput, TextInputProps, StyleProp, ViewProps, TextStyle} from 'react-native';
import {FieldInputProps, FormikProps} from 'formik';
// import IconFont from "@/assets/iconfont";
import {scaleSizeH, scaleSizeW, setSpText, wp} from "../../utils/index";

type fieldType={
    name:string;
    [key:string]:any;
}

interface IProps extends TextInputProps {
    field: fieldType;
    form: FormikProps<any>;
    container?:StyleProp<ViewProps>;
    inputStyle?:StyleProp<TextStyle> ;
    icon?:React.ReactElement;
}

/**
 * 文本输入框
 * @param props
 * @constructor
 */
const Input:FC<IProps>=(props)=>{
    const {form, field,icon,container,inputStyle,...rest} = props;
    return (
        <View style={[styles.container,container]}>
            {
                icon?<View style={{flexDirection:'row',alignItems:'center'}}>
                    {icon}
                    <TextInput
                        style={[styles.input,inputStyle]}
                        underlineColorAndroid='transparent'
                        {...rest}
                        onChangeText={form.handleChange(field.name)}
                        onBlur={form.handleBlur(field.name)}
                        value={form.values[field.name]}
                    />
                </View>:<TextInput
                    style={[styles.input,inputStyle]}
                    underlineColorAndroid='transparent'
                    {...rest}
                    onChangeText={form.handleChange(field.name)}
                    onBlur={form.handleBlur(field.name)}
                    value={form.values[field.name]}
                />
            }
            <View>
                {/*<Text style={styles.error}>{form.touched[field.name]&&form.errors[field.name]}</Text>*/}
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      marginVertical: scaleSizeH(10),
    },
    input: {
      height:scaleSizeH(40),
        padding:0,
      paddingLeft: scaleSizeW(10),
        paddingRight:scaleSizeW(40),
        width:wp(70),
        fontSize:setSpText(15),
    },
    error: {
      position: 'absolute',
      color: 'red',
      marginTop: scaleSizeH(3),
      marginLeft: scaleSizeH(10),
      fontSize: setSpText(12),
    },
});

export default Input;
