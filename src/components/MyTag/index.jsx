import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text, } from 'react-native';
import { scaleSizeW, setSpText } from '@/utils/index';
import Touchable from '@/components/Touchable';
import Func from '@/utils/Func';
const checkedStyle = {
    backgroundColor: 'rgb(16, 142, 233)',
    borderColor: 'rgb(16, 142, 233)',
};
const checkedTextStyle = {
    color: '#fff',
};
/**
 * 标签
 */
class MyTag extends PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            containerStyle: {},
            checkedTextStyle: {},
        };
        this.onPress = () => {
            const { onClose, checkable } = this.props;
            if (checkable) {
                Func.isEmptyObject(this.state.containerStyle)
                    ? this.setState({
                        containerStyle: checkedStyle,
                        checkedTextStyle: checkedTextStyle,
                    })
                    : this.setState({ containerStyle: {}, checkedTextStyle: {} });
            }
            !!onClose && onClose();
        };
    }
    render() {
        const { containerStyle, checkedTextStyle } = this.state;
        const { style, closable, text, textStyle, imageStyle, checkable } = this.props;
        return (<Touchable style={[styles.style, style, containerStyle]} onPress={this.onPress}>
        {!checkable && closable && (<Image source={require('./deletex-icon.png')} style={[styles.imageStyle, imageStyle]}/>)}
        <Text style={[styles.text, textStyle, checkedTextStyle]}>{text}</Text>
      </Touchable>);
    }
}
MyTag.defaultProps = {
    style: {},
    onClose: undefined,
    closable: true,
    imageStyle: {},
    Checkable: false,
    text: '',
    textStyle: {},
};
const styles = StyleSheet.create({
    style: {
        borderRadius: scaleSizeW(4),
        borderWidth: scaleSizeW(0.5),
        borderStyle: 'solid',
        borderColor: '#ddd',
        paddingVertical: scaleSizeW(4),
        paddingHorizontal: scaleSizeW(8),
        backgroundColor: '#fff',
    },
    imageStyle: {
        position: 'absolute',
        left: -scaleSizeW(5),
        top: -scaleSizeW(5),
        width: scaleSizeW(10),
        height: scaleSizeW(10),
    },
    text: {
        fontSize: setSpText(14),
        fontWeight: '600',
        color: '#333',
    },
});
export default MyTag;
