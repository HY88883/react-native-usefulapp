import React, { PureComponent } from 'react';
interface IMySlider {
    maximumTrackTintColor?: string;
    minimumTrackTintColor?: string;
    onChange?: (value?: number) => void;
    defaultValue?: number;
    tipFormatter?: (value?: string) => React.ReactNode;
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
}
declare class MySlider extends PureComponent<IMySlider> {
    static defaultProps: {
        maximumTrackTintColor: string;
        minimumTrackTintColor: string;
        onChange: undefined;
        defaultValue: number;
        min: number;
        max: number;
        step: number;
        disabled: boolean;
    };
    state: {
        value: number;
    };
    onChange: (value: any) => void;
    render(): any;
}
export default MySlider;
