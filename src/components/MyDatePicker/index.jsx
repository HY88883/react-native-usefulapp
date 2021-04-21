import React, { PureComponent } from 'react';
import { DatePicker, List } from '@ant-design/react-native';
import Func from "../../utils/Func";
export default MyDatePicker;
/**
 * 日期选择器
 */
class MyDatePicker extends PureComponent {
    constructor(props) {
        super(props);
        this.onChange = (value) => {
            const { format, onChange } = this.props;
            this.setState({ value });
            let dateStr = Func.dateFormat(format, value);
            !!onChange && onChange(dateStr);
        };
        this.state = {
            value: undefined
        };
        const { mode } = props;
        switch (mode) {
            case 'datetime':
                props.format = "YYYY-MM-DD HH:mm:SS";
                break;
            case 'year':
                props.format = "YYYY";
                break;
            case 'month':
                props.format = "YYYY-MM";
                break;
            case 'time':
                props.format = "HH:mm";
                break;
        }
    }
    render() {
        const { value } = this.state;
        const { mode, defaultDate, minuteStep, minDate, format, extra, maxDate, title, arrow } = this.props;
        return (<List>
                <DatePicker value={value} mode={mode} defaultDate={defaultDate} onChange={this.onChange} format={format} extra={extra} minuteStep={minuteStep}>
                    <List.Item arrow={arrow}>{title}</List.Item>
                </DatePicker>
            </List>);
    }
}
MyDatePicker.defaultProps = {
    mode: "date",
    defaultDate: new Date(),
    format: "YYYY-MM-DD",
    extra: '请选择',
    minuteStep: 1,
    arrow: 'horizontal',
};
