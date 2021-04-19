import React, {Component, PureComponent} from 'react';
import {
    Modal,
    Text,
    TouchableHighlight,
    View ,
    StyleSheet,
} from 'react-native';
import {viewportHeight, viewportWidth} from "@/utils/index";
import Touchable from "@/components/Touchable";

interface IModalDialog{
    _dialogTitle?:string;
    _dialogContent?: React.ReactElement;
    _dialogLeftBtnTitle?:string ;
    _dialogRightBtnTitle?:string ;
    _dialogVisible?: boolean;
    _dialogRightBtnAction:()=>void;
    _dialogLeftBtnAction:()=>void;
}

/**
 * 模态对话框
 */
 class ModalDialog extends PureComponent<IModalDialog> {

    static defaultProps = {
        _dialogTitle: '温馨提示',
        _dialogContent: null,
        _dialogLeftBtnTitle: '取消',
        _dialogRightBtnTitle: '确定',
        _dialogVisible: false,
        _dialogLeftBtnAction:()=>{},
        _dialogRightBtnAction:()=>{}
    }

    render() {
        // onPress事件直接与父组件传递进来的属性挂接
        return (
            <Modal
                visible={this.props._dialogVisible}
                transparent={true}
                onRequestClose={() => {}} //如果是Android设备 必须有此方法
            >
                <View style={styles.bg}>
                    <View style={styles.dialog}>
                        <View style={styles.dialogTitleView}>
                            <Text style={styles.dialogTitle}>
                                {this.props._dialogTitle}
                            </Text>
                        </View>
                        <View style={styles.dialogContentView}>
                                {this.props._dialogContent}
                        </View>

                        <View style={styles.dialogBtnView}>
                            <Touchable style={styles.dialogBtnViewItem} onPress={this.props._dialogLeftBtnAction}>
                                <Text style={styles.leftButton}>
                                    {this.props._dialogLeftBtnTitle}
                                </Text>
                            </Touchable>
                            <Touchable style={styles.dialogBtnViewItem} onPress={this.props._dialogRightBtnAction}>
                                <Text style={styles.rightButton}>
                                    {this.props._dialogRightBtnTitle}
                                </Text>
                            </Touchable>
                        </View>

                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    bg: {  //全屏显示 半透明 可以看到之前的控件但是不能操作了
        width: viewportWidth,
        height: viewportHeight,
        backgroundColor: 'rgba(52,52,52,0.5)',  //rgba  a0-1  其余都是16进制数
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialog: {
        width: viewportWidth * 0.8,
        height: viewportHeight * 0.28,
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden'
    },
    dialogTitleView: {
        width: viewportWidth * 0.8,
        height: viewportHeight * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    dialogTitle: {
        textAlign: 'center',
        fontSize: 18,
        color: '#000000',
    },
    dialogContentView: {
        width: viewportWidth * 0.8,
        height: viewportHeight * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogContent: {
        textAlign: 'center',
        fontSize: 16,
        color: '#4A4A4A',
    },
    dialogBtnView: {
        width: viewportWidth * 0.8,
        height: viewportHeight * 0.08,
        flexDirection: 'row',
    },
    dialogBtnViewItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5F2FF',
    },
    leftButton: {
        fontSize: 18,
        color: '#007AFF',
        borderBottomLeftRadius: 8,
    },
    rightButton: {
        fontSize: 18,
        color: '#007AFF',
        borderBottomRightRadius: 8,
    }
});

export default ModalDialog
