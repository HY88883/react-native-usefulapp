import React, {PureComponent, ReactNode, FC, ReactElement} from 'react';
import {
  View,
  StyleSheet,
  ColorValue,
  StyleProp,
  ViewStyle,
  Text,
  Image,
  GestureResponderEvent,
  ActivityIndicator,
} from 'react-native';
import {scaleSizeH, scaleSizeW, setSpText} from '../../utils/index';
import Touchable from '../../components/Touchable';

interface ButtonProps {
  buttonStyle?: StyleProp<ViewStyle>;
  type?: 'icon';
  icon?: ReactElement;
  text: string;
  textStyle?: StyleProp<ViewStyle>;
  loading?: boolean;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

/**
 * 按钮
 * @param props
 * @constructor
 */
const Button: FC<ButtonProps> = (props) => {
  const {
    icon,
    buttonStyle,
    loading,
    text,
    type,
    textStyle,
    disabled,
    onPress,
  } = props;
  switch (type) {
    case 'icon':
      return (
        <Touchable
          style={[styles.buttonStyle, buttonStyle]}
          disabled={disabled}
          onPress={onPress}>
         <View style={styles.iconStyle}>
           {icon}
         </View>
          <Text style={[styles.textStyle, textStyle]}>{text}</Text>
        </Touchable>
      );
    default:
      return (
        <Touchable
          style={[styles.buttonStyle, buttonStyle]}
          disabled={disabled}
          onPress={onPress}>
          {loading && (
            <ActivityIndicator
              style={styles.indicatorStyle}
              animating={loading}
              color={'#fff'}
            />
          )}
          <Text style={[styles.textStyle, textStyle]}>{text}</Text>
        </Touchable>
      );
  }
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: scaleSizeW(4),
    backgroundColor: '#1890ff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scaleSizeW(4),
    width: scaleSizeW(100),
  },
  textStyle: {
    fontSize: setSpText(14),
    color: '#fff',
  },
  indicatorStyle: {
    width: scaleSizeW(20),
    height: scaleSizeW(20),
    position: 'absolute',
    left:scaleSizeW(10)
  },
  iconStyle:{
    position: 'absolute',
    left:scaleSizeW(10)
  }
});

export default Button;
