import React from 'react';
import {View, Text, StyleSheet, TextInput, TextInputProps, StyleProp, ViewProps, TextStyle} from 'react-native';
import {FieldInputProps, FormikProps} from 'formik';
// import IconFont from "@/assets/iconfont";
import {scaleSizeH, scaleSizeW, setSpText, wp} from "@/utils/index";

interface IProps extends TextInputProps {
    field?: FieldInputProps<any>;
    form?: FormikProps<any>;
    haveIcon?:boolean;
    container?:StyleProp<ViewProps>;
    inputStyle?:StyleProp<TextStyle> ;
    icon?:React.ReactNode;
}

const IconFont=()=>(<View></View>)

/**
 * 文本输入框
 * @param props
 * @constructor
 */
const Input=(props:IProps)=>{
    const {form, field, haveIcon,icon,container,inputStyle,...rest} = props;
    return (
        <View style={[styles.container,container]}>
            {
                haveIcon?<View style={{flexDirection:'row',alignItems:'center'}}>
                    {icon}
                    <TextInput
                        style={[styles.input,inputStyle]}
                        underlineColorAndroid='transparent'
                        {...rest}
                   /*     onChangeText={form.handleChange(field.name)}
                        onBlur={form.handleBlur(field.name)}
                        value={form.values[field.name]}*/
                    />
                </View>:<TextInput
                    style={[styles.input,inputStyle]}
                    underlineColorAndroid='transparent'
                    {...rest}
                  /*  onChangeText={form.handleChange(field.name)}
                    onBlur={form.handleBlur(field.name)}
                    value={form.values[field.name]}*/
                />
            }
            <View>
                {/*<Text style={styles.error}>{form.touched[field.name]&&form.errors[field.name]}</Text>*/}
            </View>
        </View>

    )
}

Input.defaultProps={
    haveIcon:false,
}

const styles = StyleSheet.create({
    container: {
      marginVertical: scaleSizeH(10),
    },
    input: {
      height:scaleSizeH(40),
        padding:0,
      paddingHorizontal: scaleSizeW(10),
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
