import React, {PureComponent} from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  ViewStyle,
  Text,
  TextStyle,
} from 'react-native';
import {scaleSizeH, scaleSizeW, setSpText} from '../../utils/index';
import Touchable from '../../components/Touchable';
import Func from '../../utils/Func';

interface IMyTag {
  style?: StyleProp<ViewStyle>;
  onClose?: () => void;
  closable?: boolean;
  imageStyle?: StyleProp<ImageStyle>;
  checkable?: boolean;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
}

const checkedStyle = {
  backgroundColor: 'rgb(16, 142, 233)',
  borderColor: 'rgb(16, 142, 233)',
};
const checkedTextStyle = {
  color: '#fff',
};

interface IMyTagState{
  containerStyle: StyleProp<ViewStyle>;
  checkedTextStyle: StyleProp<TextStyle>;
}

/**
 * 标签
 */
class MyTag extends PureComponent<IMyTag, IMyTagState> {
  static defaultProps = {
    closable: true,
    checkable: false,
  };

  state = {
    containerStyle: null,
    checkedTextStyle: null,
  };

  onPress = () => {
    const {onClose, checkable,closable} = this.props;
    if (checkable) {
      !(this.state.containerStyle)
        ? this.setState({
            containerStyle: checkedStyle,
            checkedTextStyle: checkedTextStyle,
          })
        : this.setState({containerStyle: null, checkedTextStyle: null});
    }
    if(closable)!!onClose && onClose();
  };

  render() {
    const {containerStyle, checkedTextStyle} = this.state;
    const {
      style,
      closable,
      text,
      textStyle,
      imageStyle,
      checkable,
    } = this.props;
    return (
      <Touchable
        style={[styles.style, style, containerStyle]}
        onPress={this.onPress}>
        {!checkable && closable && (
          <Image
            source={require('./assets/deletex-icon.png')}
            style={[styles.imageStyle, imageStyle]}
          />
        )}
        <Text style={[styles.text, textStyle, checkedTextStyle]}>{text}</Text>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    borderRadius: scaleSizeW(4),
    borderWidth: scaleSizeW(0.5),
    borderStyle: 'solid',
    borderColor: '#ddd',
    paddingVertical: scaleSizeW(4),
    paddingHorizontal: scaleSizeW(8),
    backgroundColor: '#fff',
    justifyContent : "center",
    alignItems:'center',
    // width: scaleSizeW(60)
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
