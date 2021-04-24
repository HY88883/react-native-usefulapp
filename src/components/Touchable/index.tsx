import React,{useCallback} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import _ from 'lodash';


const Touchable: React.FC<TouchableOpacityProps> = React.forwardRef(({onPress,...rest},ref?:any) => {
    let throttleOnPress:any = undefined;
    if(typeof onPress === 'function') {
        throttleOnPress = useCallback(_.throttle(onPress, 1000, {leading: true, trailing: false}), [onPress]);
    }

    return  <TouchableOpacity ref={ref} onPress={onPress} activeOpacity={0.7} {...rest} />
})

export default Touchable;
