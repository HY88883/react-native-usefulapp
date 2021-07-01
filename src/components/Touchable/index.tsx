import React,{useCallback} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import _ from 'lodash';


const Touchable: React.FC<TouchableOpacityProps> = React.memo(

    React.forwardRef(({onPress,...rest},ref?:any) => {
    let throttleOnPress = useCallback(_.throttle(onPress, 1000, {leading: true, trailing: false}), [onPress]);
    return  <TouchableOpacity ref={ref} onPress={throttleOnPress} activeOpacity={0.8} {...rest} />
})

)

export default Touchable;
