import React, { PureComponent } from 'react';
import { Row, Rows, Table } from 'react-native-table-component';
import { StyleSheet } from "react-native";
import { scaleSizeH, setSpText, wp } from "@/utils/index";
/**
 * 表格
 */
class MyTable extends PureComponent {
    render() {
        const { optionsChange, flexArr, borderStyle, table, rowStyle, textStyle } = this.props;
        return (<Table borderStyle={Object.assign(Object.assign({}, styles.borderStyle), borderStyle)} style={[styles.table, table]}>
                <Row flexArr={flexArr} data={optionsChange.tableHead} style={[styles.rowStyle, rowStyle]} textStyle={[styles.text, textStyle]}/>
                <Rows flexArr={flexArr} data={optionsChange.tableData} style={[styles.rowStyle, rowStyle]} textStyle={[styles.text, textStyle]}/>
            </Table>);
    }
}
MyTable.defaultProps = {
    borderStyle: {},
    table: {},
    rowStyle: {},
    textStyle: {}
};
const styles = StyleSheet.create({
    rowStyle: {
        height: scaleSizeH(40),
    },
    table: {
        width: wp(90),
        alignSelf: 'center',
    },
    text: {
        color: '#333',
        fontSize: setSpText(14),
        textAlign: "center"
    },
    borderStyle: { borderWidth: 1, borderColor: '#333' }
});
export default MyTable;
