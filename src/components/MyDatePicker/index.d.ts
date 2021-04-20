import React, { PureComponent } from 'react';
interface IMyDatePicker {
    mode?: 'datetime' | 'date' | 'year' | 'month' | 'time';
    onChange?: (value: Date) => void;
    defaultDate?: Date;
    format?: string | ((value: Date) => string);
    extra?: string;
    minuteStep?: number;
    title?: React.ReactNode;
    arrow?: 'horizontal' | 'down' | 'up' | 'empty' | '';
}
interface IMyDatePickerState {
    value: Date | undefined;
}
export default MyDatePicker;
/**
 * 日期选择器
 */
declare class MyDatePicker extends PureComponent<IMyDatePicker, IMyDatePickerState> {
    static defaultProps: {
        mode: string;
        defaultDate: Date;
        format: string;
        extra: string;
        minuteStep: number;
        arrow: string;
    };
    constructor(props: IMyDatePicker);
    onChange: (value: any) => void;
    render(): any;
}
