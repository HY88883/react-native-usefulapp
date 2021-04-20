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
            console.log(checked, item);
            if (checked) {
                this.setState({ radioIndex: index });
                !!onChange && onChange(checked, item, index);
            }
        };
    }
    render() {
        const { list, style, onChange, keyIndex, titleIndex, defaultIndex } = this.props;
        const { radioIndex } = this.state;
        return (<List>
            {Array.isArray(list) && list.map((item, index) => (<RadioItem key={item[keyIndex] || index} defaultChecked={defaultIndex === index} checked={radioIndex === index} onChange={(event) => {
                    this.onChange(event.target.checked, item, index);
                }} style={style}>
                        {item[titleIndex]}
                    </RadioItem>))}
        </List>);
    }
}
MyRadio.defaultProps = {
    keyIndex: 'keyIndex',
    titleIndex: 'titleIndex',
    style: {},
    onChange: (params, item, index) => { },
    defaultIndex: -1
};
export default MyRadio;
