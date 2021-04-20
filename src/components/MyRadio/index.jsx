import React, { PureComponent } from 'react';
import { List, Radio } from "@ant-design/react-native";
const RadioItem = Radio.RadioItem;
/**
 * 单选按钮
 */
class MyRadio extends PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            radioIndex: -1
        };
        this.onChange = (checked, item, index) => {
            const { onChange } = this.props;
            if (checked) {
                this.setState({ radioIndex: index });
                !!onChange && onChange(checked, item, index);
            }
        };
    }
    render() {
        const { list, style, onChange, keyProp, titleProp, defaultIndex } = this.props;
        const { radioIndex } = this.state;
        return (<List>
            {Array.isArray(list) && list.map((item, index) => (<RadioItem key={item[keyProp] || index} defaultChecked={defaultIndex === index} checked={radioIndex === index} onChange={(event) => {
                    this.onChange(event.target.checked, item, index);
                }} style={style}>
                        {item[titleProp]}
                    </RadioItem>))}
        </List>);
    }
}
MyRadio.defaultProps = {
    keyProp: 'dictKey',
    titleProp: 'dictValue',
    style: {},
    onChange: (params, item, index) => { },
    defaultIndex: -1
};
export default MyRadio;
