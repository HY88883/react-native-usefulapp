import React from 'react';
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
  icon?: React.ReactNode;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  avatarStyle?: StyleProp<any> ;
}

//头像
const Avatar = (props: IAvatar): any => {
  const {type, uri, icon, text, avatarStyle, textStyle} = props;
  switch (type) {
    case 'image':
      return (
        <View style={{overflow: 'hidden'}}>
          <Image
            source={{uri}}
            style={[styles.avatar, avatarStyle]}
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
