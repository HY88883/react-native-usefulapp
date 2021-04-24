import React, {ReactChild, ReactNode} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import {scaleSizeW, setSpText} from '../../utils/index';

interface IAvatar {
  type?: 'image' | 'icon' | 'character';
  uri?: string;
  icon?: any;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  imageAvatarStyle?: StyleProp<ImageStyle>;
  avatarStyle?: StyleProp<ViewStyle>;
}

//头像
const Avatar: React.FC<IAvatar> = (props) => {
  const {
    type,
    uri,
    icon,
    text,
    avatarStyle,
    textStyle,
    imageAvatarStyle,
  } = props;
  switch (type) {
    case 'image':
      return (
        <View style={{overflow: 'hidden'}}>
          <Image
            source={{uri}}
            style={[styles.avatar, imageAvatarStyle]}
            resizeMode={'cover'}
          />
        </View>
      );
    case 'icon':
      return icon;
    case 'character':
      return (
        <View
          style={[
            styles.avatar,
            {justifyContent: 'center', alignItems: 'center'},
            avatarStyle,
          ]}>
          <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
      );
    default:
      return <View style={[styles.avatar, avatarStyle]} />;
  }
};

const styles = StyleSheet.create({
  avatar: {
    width: scaleSizeW(60),
    height: scaleSizeW(60),
    borderRadius: scaleSizeW(30),
    backgroundColor: '#ccc',
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    fontSize: setSpText(16),
  },
});

export default Avatar;
