var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
// import IconFont from "@/assets/iconfont";
import { scaleSizeH, scaleSizeW, setSpText, wp } from "../../utils/index";
const IconFont = () => (<View></View>);
/**
 * 文本输入框
 * @param props
 * @constructor
 */
const Input = (props) => {
    const { form, field, haveIcon, icon, container, inputStyle } = props, rest = __rest(props, ["form", "field", "haveIcon", "icon", "container", "inputStyle"]);
    return (<View style={[styles.container, container]}>
            {haveIcon ? <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {icon}
                    <TextInput style={[styles.input, inputStyle]} underlineColorAndroid='transparent' {...rest}/>
                </View> : <TextInput style={[styles.input, inputStyle]} underlineColorAndroid='transparent' {...rest}/>}
            <View>
                {/*<Text style={styles.error}>{form.touched[field.name]&&form.errors[field.name]}</Text>*/}
            </View>
        </View>);
};
Input.defaultProps = {
    haveIcon: false,
};
const styles = StyleSheet.create({
    container: {
        marginVertical: scaleSizeH(10),
    },
    input: {
        height: scaleSizeH(40),
        padding: 0,
        paddingHorizontal: scaleSizeW(10),
        width: wp(70),
        fontSize: setSpText(15),
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
