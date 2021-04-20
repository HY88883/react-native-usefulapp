import React from 'react';
import { StepIndicatorStyles } from "react-native-step-indicator/lib/typescript/src/types";
interface IMyStepIndicator {
    labels: Array<any>;
    stepCount: number;
    customStyles?: StepIndicatorStyles;
    currentPosition?: number;
    direction?: 'horizontal' | 'vertical';
    onPress?: (index: number) => void;
    renderStepIndicator?: ({ position: number, stepStatus: string }: {
        position: any;
        stepStatus: any;
    }) => React.ReactNode;
    renderLabel?: ({ position: number, stepStatus: string, label: string, currentPosition: number }: {
        position: any;
        stepStatus: any;
        label: any;
        currentPosition: any;
    }) => React.ReactNode;
}
/**
 * 步骤条
 * @param props
 * @constructor
 */
declare const MyStepIndicator: {
    (props: IMyStepIndicator): any;
    defaultProps: {
        customStyles: {
            stepIndicatorSize: any;
            currentStepIndicatorSize: any;
            separatorStrokeWidth: number;
            currentStepStrokeWidth: number;
            stepStrokeCurrentColor: string;
            stepStrokeWidth: number;
            stepStrokeFinishedColor: string;
            stepStrokeUnFinishedColor: string;
            separatorFinishedColor: string;
            separatorUnFinishedColor: string;
            stepIndicatorFinishedColor: string;
            stepIndicatorUnFinishedColor: string;
            stepIndicatorCurrentColor: string;
            stepIndicatorLabelFontSize: any;
            currentStepIndicatorLabelFontSize: any;
            stepIndicatorLabelCurrentColor: string;
            stepIndicatorLabelFinishedColor: string;
            stepIndicatorLabelUnFinishedColor: string;
            labelColor: string;
            labelSize: any;
            currentStepLabelColor: string;
        };
        currentPosition: number;
        direction: string;
        onPress: null;
        renderStepIndicator: null;
        renderLabel: null;
    };
};
export default MyStepIndicator;
