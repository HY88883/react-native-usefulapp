import React, { PureComponent } from 'react';
import {DatePicker, List} from '@ant-design/react-native';
import Func from "../../utils/Func";

interface IMyDatePicker {
    mode?: 'datetime' | 'date' | 'year' | 'month' | 'time';
    // minDate?: Date;
    // maxDate?: Date;
    onChange?: (value: Date) => void;
    defaultDate?: Date;
    format?: string | ((value: Date) => string);
    extra?: string;
    minuteStep?: number;
    title?:React.ReactNode;
    arrow?:'horizontal' | 'down' | 'up' | 'empty' | '';
}

interface IMyDatePickerState {
    value:Date|undefined;

}

export default MyDatePicker;

/**
 * 日期选择器
 */
class MyDatePicker extends PureComponent<IMyDatePicker,IMyDatePickerState> {

    static defaultProps = {
        mode:"date",
        defaultDate:new Date(),
        format:"YYYY-MM-DD",
        extra:'请选择',
        minuteStep:1,
        arrow:'horizontal',
    }

    constructor(props:IMyDatePicker){
        super(props);
        this.state={
            value:undefined
        }
        const {mode}=props
        switch (mode) {
            case 'datetime':props.format = "YYYY-MM-DD HH:mm:SS";break;
            case 'year':props.format = "YYYY";break;
            case 'month':props.format = "YYYY-MM";break;
            case 'time':props.format = "HH:mm";break;
        }
    }



    onChange=(value)=>{
        const {format,onChange}=this.props
        this.setState({value})
        let dateStr=Func.dateFormat(format,value)
        !!onChange&&onChange(dateStr)
    }

    render() {
        const {value}=this.state;
        const {mode,defaultDate,minuteStep,minDate,format,extra,maxDate,title,arrow}=this.props
        return (
            <List>
                <DatePicker
                    value={value}
                    mode={mode}
                    defaultDate={defaultDate}
                    onChange={this.onChange}
                    format={format}
                    extra={extra}
                    minuteStep={minuteStep}
                >
                    <List.Item arrow={arrow}>{title}</List.Item>
                </DatePicker>
            </List>
        );
    }
}
