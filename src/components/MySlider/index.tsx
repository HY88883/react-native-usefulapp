import React, {PureComponent} from 'react';
import {Slider} from '@ant-design/react-native';

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

//滑动输入条
class MySlider extends PureComponent<IMySlider> {
  static defaultProps = {
    maximumTrackTintColor: 'blue',
    minimumTrackTintColor: 'red',
    onChange: undefined,
    defaultValue: 0,
    min: 0,
    max: 1,
    step: 0.1,
    disabled: false,
  };

  state = {
    value: 0,
  };

  onChange = value => {
    this.setState({value});
    const {onChange}=this.props;
    !!onChange&&onChange(value)
  };

  render() {
    const {value} = this.state;
    const {
      disabled,
      defaultValue,
      step,
      minimumTrackTintColor,
      min,
      maximumTrackTintColor,
      max,
    } = this.props;
    return (
      <Slider
        onChange={this.onChange}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        step={step}
        max={max}
        min={min}
        minimumTrackTintColor={minimumTrackTintColor}
        maximumTrackTintColor={maximumTrackTintColor}
      />
    );
  }
}

export default MySlider;
