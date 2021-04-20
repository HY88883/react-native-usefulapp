import React, { PureComponent } from 'react';
import { View, StyleSheet, Modal, Text, Dimensions, TouchableOpacity } from 'react-native';
import Bar from './Bar';
import { scaleSizeH, scaleSizeW, setSpText } from "@/utils/index";
const { width } = Dimensions.get('window');
//条形进度条
class ProgressBarDialog extends PureComponent {
    render() {
        const { animationType, transparent, onRequestClose, progress, title, canclePress, cancleText, needCancle, progressModalVisible } = this.props;
        return (<Modal animationType={animationType} transparent={transparent} visible={progressModalVisible} onRequestClose={onRequestClose}>
                <View style={styles.progressBarView}>
                    <View style={styles.subView}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                        <Bar style={{ marginHorizontal: scaleSizeW(10), width: width - scaleSizeW(80) }} progress={progress} backgroundStyle={styles.barBackgroundStyle}/>
                        <View style={styles.progressContainer}>
                            <Text style={styles.progressLeftText}>
                                {`${progress}`}%
                            </Text>
                            <Text style={styles.progressRightText}>
                                {`${progress}`}/100
                            </Text>
                        </View>
                        {needCancle &&
                <View style={styles.cancleContainer}>
                            <TouchableOpacity style={styles.cancleButton} onPress={canclePress}>
                                <Text style={styles.cancleText}>
                                    {cancleText}
                                </Text>
                            </TouchableOpacity>
                        </View>}
                    </View>
                </View>
            </Modal>);
    }
}
ProgressBarDialog.defaultProps = {
    animationType: 'fade',
    transparent: true,
    progressModalVisible: false,
    onShow: () => { },
    onRequestClose: () => { },
    onOutSidePress: () => { },
    title: '上传',
    cancleText: '取消',
    canclePress: () => { },
    needCancle: true,
    progress: 0,
};
const styles = StyleSheet.create({
    progressBarView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    barStyle: {
        marginLeft: scaleSizeW(10),
        marginRight: scaleSizeW(10),
        width: width - scaleSizeW(80)
    },
    progressLeftText: {
        fontSize: setSpText(14)
    },
    cancleContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    progressRightText: {
        fontSize: setSpText(14),
        color: '#666666'
    },
    barBackgroundStyle: {
        backgroundColor: '#cccccc'
    },
    progressContainer: {
        flexDirection: 'row',
        padding: scaleSizeW(10),
        justifyContent: 'space-between'
    },
    subView: {
        marginHorizontal: scaleSizeW(30),
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderRadius: scaleSizeW(12)
    },
    progressView: {
        flexDirection: 'row',
        padding: scaleSizeW(10),
        paddingBottom: scaleSizeH(5),
        justifyContent: 'space-between'
    },
    title: {
        textAlign: 'left',
        padding: scaleSizeW(10),
        fontSize: setSpText(16)
    },
    cancleButton: {
        padding: scaleSizeW(10)
    },
    cancleText: {
        textAlign: 'right',
        paddingTop: 0,
        fontSize: setSpText(16),
        color: 'rgba(0, 122, 255, 1)'
    }
});
export default ProgressBarDialog;
