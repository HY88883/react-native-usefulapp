var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import _ from 'lodash';
const Touchable = React.forwardRef((_a, ref) => {
    var { onPress } = _a, rest = __rest(_a, ["onPress"]);
    let throttleOnPress = undefined;
    if (typeof onPress === 'function') {
        throttleOnPress = useCallback(_.throttle(onPress, 1000, { leading: true, trailing: false }), [onPress]);
    }
    return <TouchableOpacity onPress={onPress} activeOpacity={0.7} {...rest} ref={ref}/>;
});
export default Touchable;
