import React, {FC, PureComponent} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {Checkbox, List} from '@ant-design/react-native';
import {OnChangeParams} from '@ant-design/react-native/lib/checkbox/PropsType';

const CheckboxItem = Checkbox.CheckboxItem;

interface IMyCheckbox {
  list: Array<Record<string | number, any>>;
  keyProp?: string | number; //指定key的属性名
  titleProp?: string | number; //指定显示属性名
  checkboxStyle?: StyleProp<TextStyle>;
  onChange?: (checked: boolean, item: any, index: number) => void;
}

/**
 * 多选按钮
 * @param props
 * @constructor
 */
const MyCheckbox: FC<IMyCheckbox> = (props) => {
  const {list, titleProp, keyProp, checkboxStyle, onChange} = props;
  return (
    <List>
      {Array.isArray(list) &&
        list.map((item, index) => (
          <CheckboxItem
            key={item[keyProp || 'dictKey'] || index}
            onChange={(event: OnChangeParams) => {
              !!onChange && onChange(event.target.checked, item, index);
            }}
            checkboxStyle={checkboxStyle}
            defaultChecked={item.defaultChecked}>
            {item[titleProp || 'dictValue']}
          </CheckboxItem>
        ))}
    </List>
  );
};

MyCheckbox.defaultProps = {
  keyProp: 'dictKey',
  titleProp: 'dictValue',
};

export default MyCheckbox;
