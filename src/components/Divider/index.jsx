import React from 'react';
import { View, StyleSheet } from 'react-native';
/**
 * 分割线
 * @param props
 * @constructor
 */
const Divider = (props) => {
    let { lineHeight, color, style, type } = props;
    switch (type) {
        case 'vertical': return (<View style={[
                {
                    height: '5%',
                    width: 0,
                    borderLeftWidth: lineHeight,
                    borderColor: color,
                    opacity: 0.7,
                    margin: StyleSheet.hairlineWidth,
                    alignSelf: 'center'
                },
                style
            ]}/>);
        default: return (<View style={[
                {
                    height: 0,
                    width: '80%',
                    borderTopWidth: lineHeight,
                    borderColor: color,
                    opacity: 0.7,
                    margin: StyleSheet.hairlineWidth,
                    alignSelf: 'center'
                },
                style
            ]}/>);
    }
};
Divider.defaultProps = {
    lineHeight: StyleSheet.hairlineWidth,
    color: '#bdbdbd',
    type: 'horizontal'
};
export default Divider;
