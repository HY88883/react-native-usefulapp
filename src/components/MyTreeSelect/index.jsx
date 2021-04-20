import { setSpText } from '@/utils/index';
import TreeSelect from 'react-native-tree-select';
import React from 'react';
import { StyleSheet } from 'react-native';
/**
 * 树形控件
 * @param props
 * @constructor
 */
const MyTreeSelect = (props) => {
    const { data, isOpen, defaultSelectedId, selectType, itemStyle, selectedItemStyle, onClick, onClickLeaf, leafCanBeSelected, } = props;
    return (<TreeSelect data={data} isOpen={isOpen} defaultSelectedId={defaultSelectedId} leafCanBeSelected={leafCanBeSelected} selectType={selectType} itemStyle={[styles.itemStyle, itemStyle]} selectedItemStyle={[styles.selectedItemStyle, selectedItemStyle]} onClick={onClick} onClickLeaf={onClickLeaf}/>);
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
    onClick: () => { },
    onClickLeaf: p => { },
    isOpen: false,
    itemStyle: {},
    selectedItemStyle: {},
    leafCanBeSelected: false,
    defaultSelectedId: [''],
    selectType: 'single',
};
export default MyTreeSelect;
