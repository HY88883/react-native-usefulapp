import React from 'react';
import { StyleSheet, Text, ActivityIndicator, } from 'react-native';
import { scaleSizeW, setSpText } from '@/utils/index';
import Touchable from '@/components/Touchable';
/**
 * 按钮
 * @param props
 * @constructor
 */
const Button = (props) => {
    const { icon, buttonStyle, loading, text, type, textStyle, disabled, onPress, } = props;
    switch (type) {
        case 'icon':
            return (<Touchable style={[styles.buttonStyle, buttonStyle]} disabled={disabled} onPress={onPress}>
            {icon}
            {text ? (<Text style={[styles.textStyle, textStyle]}>
                  {text}
                </Text>) : null}
          </Touchable>);
        default:
            return (<Touchable style={[styles.buttonStyle, buttonStyle]} disabled={disabled} onPress={onPress}>
            {loading && (<ActivityIndicator style={{ width: scaleSizeW(20), height: scaleSizeW(20) }} animating={loading} color={'#fff'}/>)}
            {text ? (<Text style={[styles.textStyle, textStyle]}>
                  {text}
                </Text>) : null}
          </Touchable>);
    }
};
const styles = StyleSheet.create({
    buttonStyle: {
        padding: scaleSizeW(4),
        backgroundColor: '#1890ff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scaleSizeW(4)
    },
    textStyle: {
        fontSize: setSpText(14),
        color: '#fff',
    },
});
export default Button;
