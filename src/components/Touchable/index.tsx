import React,{useCallback} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import _ from 'lodash';


const Touchable: React.FC<TouchableOpacityProps> = React.forwardRef(({onPress,...rest},ref) => {
    let throttleOnPress = undefined;
    if(typeof onPress === 'function') {
        throttleOnPress = useCallback(_.throttle(onPress, 1000, {leading: true, trailing: false}), [onPress]);
    }

    return  <TouchableOpacity onPress={onPress} activeOpacity={0.7} {...rest} ref={ref}/>
})

export default Touchable;
