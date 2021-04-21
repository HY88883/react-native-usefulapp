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
import { scaleSizeH, scaleSizeW, setSpText, wp } from '../../utils/index';
import { StyleSheet, Text, View } from 'react-native';
import { Grid } from '@ant-design/react-native';
import React from 'react';
/**
 * 宫格
 * @param props
 * @constructor
 */
const MyGrid = (props) => {
    const { data, onPress, containerStyle } = props, others = __rest(props, ["data", "onPress", "containerStyle"]);
    const renderItem = function (el, index) {
        let radiusStyle = {};
        switch (index) {
            case 0:
                radiusStyle = { borderTopLeftRadius: scaleSizeW(12) };
                break;
            case 2:
                radiusStyle = { borderTopRightRadius: scaleSizeW(12) };
                break;
            case 3:
                radiusStyle = { borderBottomLeftRadius: scaleSizeW(12) };
                break;
            case 5:
                radiusStyle = { borderBottomRightRadius: scaleSizeW(12) };
                break;
        }
        return (<View style={[styles.itemStyle, radiusStyle]}>
        {el.icon ? el.icon : null}
        <Text style={styles.itemText}>{el.text}</Text>
      </View>);
    };
    return (<View style={[styles.containerStyle, containerStyle]}>
      <Grid data={data} columnNum={3} onPress={onPress} hasLine={false} renderItem={renderItem} {...others}/>
    </View>);
};
MyGrid.defaultProps = {
    data: [],
    containerStyle: {}
};
const styles = StyleSheet.create({
    itemStyle: {
        height: scaleSizeH(98),
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(200,200,200,0.5)',
        borderWidth: 0.5,
    },
    itemText: { textAlign: 'center', color: '#666', fontSize: setSpText(14) },
    containerStyle: {
        width: wp(90),
        alignSelf: 'center'
    },
});
export default MyGrid;
