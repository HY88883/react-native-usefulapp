import React, {PureComponent} from 'react';
import {StyleProp, TextStyle,} from 'react-native';
import {Checkbox, List} from '@ant-design/react-native';

const CheckboxItem = Checkbox.CheckboxItem;

interface IMyCheckbox {
    list:Array<Record<string | number | symbol, any>>;
    keyProp?:string|number;//指定key的属性名
    titleProp?:string|number;//指定显示属性名
    checkboxStyle?:StyleProp<TextStyle>;
    onChange?: (checked: boolean,item:object,index:number) => void;
}

/**
 * 多选按钮
 * @param props
 * @constructor
 */
const MyCheckbox = (props: IMyCheckbox) => {
    const {list,titleProp,keyProp,checkboxStyle,onChange}=props
    return (
        <List>
            {
                Array.isArray(list)&&list.map((item,index)=>(
                    <CheckboxItem
                        key={item[keyProp]||index}
                        onChange={event => {
                            !!onChange&&onChange(event.target.checked,item,index)
                        }}
                        checkboxStyle={checkboxStyle}
                        defaultChecked={item['defaultChecked']}
                    >
                        {item[titleProp]}
                    </CheckboxItem>
                ))
            }
        </List>
    );
}

MyCheckbox.defaultProps = {
    keyProp:'dictKey',
    titleProp:'dictValue',
}

export default MyCheckbox;
