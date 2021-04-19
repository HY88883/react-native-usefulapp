import React, {Component, PureComponent} from 'react';
import { Row, Rows, Table } from 'react-native-table-component';
import {StyleProp, StyleSheet, TextStyle, ViewStyle} from "react-native";
import {scaleSizeH, setSpText, wp} from "@/utils/index";

interface IMyTable {
    optionsChange:{
        tableHead:any[],
        tableData:any[][]
    },
    flexArr:number[],
    borderStyle?:StyleProp<ViewStyle>;
    table?:StyleProp<ViewStyle>;
    rowStyle?:StyleProp<ViewStyle>;
    textStyle?:StyleProp<TextStyle>;
}

/**
 * 表格
 */
class MyTable extends PureComponent<IMyTable> {

    static defaultProps = {
        borderStyle:{},
    table:{},
    rowStyle:{},
        textStyle:{}
    }

    render() {
        const {optionsChange,flexArr,borderStyle,table,rowStyle,textStyle}=this.props
        return (
            <Table
                borderStyle={{...styles.borderStyle,...borderStyle}}
                style={[styles.table,table]}>
                <Row
                    flexArr={flexArr}
                    data={optionsChange.tableHead}
                    style={[styles.rowStyle,rowStyle]}
                    textStyle={[styles.text,textStyle]}
                />
                <Rows
                    flexArr={flexArr}
                    data={optionsChange.tableData}
                    style={[styles.rowStyle,rowStyle]}
                    textStyle={[styles.text,textStyle]}
                />
            </Table>
        );
    }
}

const styles = StyleSheet.create({
    rowStyle: {
        height: scaleSizeH(40),
    },
    table: {
        width: wp(90),
        alignSelf:'center',
    },
    text:{
        color:'#333',
        fontSize:setSpText(14),
        textAlign : "center"
    },
    borderStyle:{ borderWidth: 1, borderColor: '#333' }
})

export default MyTable;
