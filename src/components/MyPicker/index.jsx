import React, { PureComponent } from 'react';
import { Text, View, } from 'react-native';
import { scaleSizeH, setSpText } from '../../utils/index';
import { Picker } from '@ant-design/react-native';
import Touchable from "../../components/Touchable";
export const CustomChildren = (props) => {
    return <Touchable onPress={props.onPress}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: scaleSizeH(50),
        }}>
            <Text style={{ fontWeight: '600',
            textAlign: 'left',
            fontSize: setSpText(13),
            color: '#333333', }}>
                {props.children}
            </Text>
                <Text style={{ textAlign: 'right',
            fontSize: setSpText(13), color: props.extra && props.extra.includes('请选择') ? '#999999' : '#333333' }}>{props.extra}</Text>
        </View>
    </Touchable>;
};
//选择器 eg.省市区
class MyPicker extends PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            value: []
        };
        this.onChange = (value) => {
            this.setState({ value: [...value] });
            if (this.props.onChange) {
                this.props.onChange(value);
            }
        };
    }
    render() {
        const { cols, data, extra, title } = this.props;
        const { value } = this.state;
        return (<Picker data={data} cols={cols} value={value} onChange={this.onChange} extra={extra}>
                        <CustomChildren>{title}</CustomChildren>
                    </Picker>);
    }
}
MyPicker.defaultProps = {
    onChange: value => { },
    extra: '请选择',
    title: ''
};
export default MyPicker;
