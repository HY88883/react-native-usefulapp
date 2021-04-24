import React, {Component, PureComponent} from 'react';
import {DatePicker, List, Picker} from '@ant-design/react-native';
import Func from "../../utils/Func";
import {CustomChildren} from "../MyPicker/index";

interface IMyDatePicker {
    mode?: 'datetime' | 'date' | 'year' | 'month' | 'time';
    // minDate?: Date;
    // maxDate?: Date;
    onChange?: (value: string) => void;
    defaultDate?: Date;
    extra?: string;
    minuteStep?: number;
    title?:React.ReactNode;
}

interface IMyDatePickerState {
    value:Date|undefined;

}

/**
 * 日期选择器
 */
class MyDatePicker extends Component<IMyDatePicker, IMyDatePickerState> {
    static defaultProps = {
        mode:"date",
        defaultDate:new Date(),
        extra:'请选择',
        minuteStep:1,
    }

    format="YYYY-MM-DD"

    constructor(props:IMyDatePicker){
        super(props);
        this.state={
            value:undefined
        }
        const {mode}=props
        switch (mode) {
            case 'datetime':this.format = "YYYY-MM-DD HH:mm:SS";break;
            case 'year':this.format = "YYYY";break;
            case 'month':this.format = "YYYY-MM";break;
            case 'time':this.format = "HH:mm";break;
        }
    }

    onChange=(value:Date)=>{
        const {onChange}=this.props
        this.setState({value})
        let dateStr:string=Func.dateFormat(this.format,value)
        console.log('value'+value)
        !!onChange&&onChange(dateStr)
    }

    render() {
        const {value}=this.state;
        const {mode,defaultDate,minuteStep,minDate,extra,maxDate,title}=this.props
        return (
                <DatePicker
                    value={value}
                    mode={mode}
                    defaultDate={defaultDate}
                    onChange={this.onChange}
                   /* onValueChange={(vals,index)=>{
                        console.log(vals,index)
                    }}*/
                    format={this.format}
                    extra={extra}
                    minuteStep={minuteStep}
                >
                    <CustomChildren>{title}</CustomChildren>
                </DatePicker>
        );
    }
}

export default MyDatePicker;
