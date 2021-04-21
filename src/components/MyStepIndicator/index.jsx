import React from 'react';
import { scaleSizeW, setSpText } from '../../utils/index';
import StepIndicator from 'react-native-step-indicator';
/**
 * 步骤条
 * @param props
 * @constructor
 */
const MyStepIndicator = (props) => {
    const { customStyles, stepCount, renderStepIndicator, onPress, labels, direction, currentPosition, renderLabel } = props;
    return (<StepIndicator stepCount={stepCount} customStyles={customStyles} currentPosition={currentPosition} direction={direction} labels={labels} onPress={onPress} renderStepIndicator={renderStepIndicator} renderLabel={renderLabel}/>);
};
MyStepIndicator.defaultProps = {
    customStyles: {
        stepIndicatorSize: scaleSizeW(25),
        currentStepIndicatorSize: scaleSizeW(25),
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#1890ff',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: setSpText(13),
        currentStepIndicatorLabelFontSize: setSpText(13),
        stepIndicatorLabelCurrentColor: '#1890ff',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: setSpText(13),
        currentStepLabelColor: '#1890ff'
    },
    currentPosition: 0,
    direction: 'horizontal',
    onPress: null,
    renderStepIndicator: null,
    renderLabel: null,
};
export default MyStepIndicator;
