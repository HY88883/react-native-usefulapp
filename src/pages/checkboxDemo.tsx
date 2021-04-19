import React, {Component} from 'react';
import {MyCheckbox} from '@/components/index';

export default class CheckboxDemo extends Component {
  render() {
    return (
      <MyCheckbox
        list={[
          {one: 'item1', two: 1},
          {one: 'item2', two: 2},
          {one: 'item3', two: 3},
          {one: 'item4', two: 4},
        ]}
        onChange={(checked, item, index) => {
          console.log(checked, item, index);
        }}
        keyProp={'two'}
        titleProp={'one'}
      />
    );
  }
}
