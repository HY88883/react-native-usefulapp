import {setSpText} from '../../utils/index';
import TreeSelect, {LeafClickProps, TreeItem} from 'react-native-tree-select';
import React, {ReactElement} from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';

interface IMyTreeSelect {
  data: TreeItem[];
  onClick?: () => void;
  onClickLeaf?: (p: LeafClickProps) => void;
  isOpen?: boolean;
  itemStyle?: StyleProp<TextStyle>;
  selectedItemStyle?: StyleProp<TextStyle>;
  leafCanBeSelected?: boolean;
  defaultSelectedId?: string[];
  selectType?: 'single' | 'multiple';
}

/**
 * 树形控件
 * @param props
 * @constructor
 */
const MyTreeSelect = (props: IMyTreeSelect) => {
  const {
    data,
    isOpen,
    defaultSelectedId,
    selectType,
    itemStyle,
    selectedItemStyle,
    onClick,
    onClickLeaf,
    leafCanBeSelected,
  } = props;
  return (
    <TreeSelect
      data={data}
      isOpen={isOpen}
      defaultSelectedId={defaultSelectedId}
      leafCanBeSelected={leafCanBeSelected}
      selectType={selectType}
      itemStyle={[styles.itemStyle, itemStyle]}
      selectedItemStyle={[styles.selectedItemStyle, selectedItemStyle]}
      onClick={onClick}
      onClickLeaf={onClickLeaf}
    />)
};

const styles = StyleSheet.create({
  itemStyle: {
    backgroundColor: '#fff',
    fontSize: setSpText(13),
    color: '#333',
  },
  selectedItemStyle: {
    backgroundColor: '#1890ff',
    fontSize: setSpText(15),
    color: '#fff',
  },
});

MyTreeSelect.defaultProps = {
  onClick: () => {},
  onClickLeaf: p => {},
  isOpen: false,
  itemStyle: {},
  selectedItemStyle: {},
  leafCanBeSelected: false,
  defaultSelectedId: [''],
  selectType: 'single',
};

export default MyTreeSelect;
