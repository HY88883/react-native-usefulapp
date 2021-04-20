import React, { PureComponent } from 'react';
import { Slider } from '@ant-design/react-native';
//滑动输入条
class MySlider extends PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            value: 0,
        };
        this.onChange = value => {
            this.setState({ value });
            const { onChange } = this.props;
            !!onChange && onChange(value);
        };
    }
    render() {
        const { value } = this.state;
        const { disabled, defaultValue, step, minimumTrackTintColor, min, maximumTrackTintColor, max, } = this.props;
        return (<Slider onChange={this.onChange} value={value} defaultValue={defaultValue} disabled={disabled} step={step} max={max} min={min} minimumTrackTintColor={minimumTrackTintColor} maximumTrackTintColor={maximumTrackTintColor}/>);
    }
}
MySlider.defaultProps = {
    maximumTrackTintColor: 'blue',
    minimumTrackTintColor: 'red',
    onChange: undefined,
    defaultValue: 0,
    min: 0,
    max: 1,
    step: 0.1,
    disabled: false,
};
export default MySlider;
