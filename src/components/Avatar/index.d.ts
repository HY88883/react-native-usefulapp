import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
interface IAvatar {
    type?: 'image' | 'icon' | 'character';
    uri?: string;
    icon?: React.ReactNode;
    text?: string;
    textStyle?: StyleProp<TextStyle>;
    avatarStyle?: StyleProp<any>;
}
declare const Avatar: (props: IAvatar) => any;
export default Avatar;
