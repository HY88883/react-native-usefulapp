import React from 'react';
import { Modal } from "@ant-design/react-native";
import { Text } from 'react-native';
import { scaleSizeH, setSpText } from "../../utils/index";
/**
 * 对话框
 */
class MyModal {
    static alert(title, message, onPress, data = {}) {
        Modal.alert(<Text style={{ color: '#000000', fontSize: setSpText(18) }}>{title}</Text>, <Text style={{
                color: '#888888',
                fontSize: setSpText(15),
                lineHeight: scaleSizeH(22),
                textAlign: 'center'
            }}>{message}</Text>, data.isForce ?
            [
                {
                    text: '确定',
                    onPress: () => onPress(data),
                    style: 'ok'
                }
            ]
            :
                [
                    { text: '取消', onPress: () => { }, style: 'cancle' },
                    {
                        text: '确定',
                        onPress: () => onPress(data),
                        style: 'ok'
                    },
                ], () => false);
    }
}
export default MyModal;
