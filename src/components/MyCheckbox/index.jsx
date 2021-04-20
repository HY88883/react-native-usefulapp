import React from 'react';
import { Checkbox, List } from '@ant-design/react-native';
const CheckboxItem = Checkbox.CheckboxItem;
/**
 * 多选按钮
 * @param props
 * @constructor
 */
const MyCheckbox = (props) => {
    const { list, titleProp, keyProp, checkboxStyle, onChange } = props;
    return (<List>
            {Array.isArray(list) && list.map((item, index) => (<CheckboxItem key={item[keyProp] || index} onChange={event => {
                !!onChange && onChange(event.target.checked, item, index);
            }} checkboxStyle={checkboxStyle} defaultChecked={item['defaultChecked']}>
                        {item[titleProp]}
                    </CheckboxItem>))}
        </List>);
};
MyCheckbox.defaultProps = {
    keyProp: 'dictKey',
    titleProp: 'dictValue',
};
export default MyCheckbox;
