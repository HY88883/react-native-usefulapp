import React, {Component, FC, PureComponent} from 'react';
import {
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Button from '../../components/Button';
import {scaleSizeW, setSpText} from '../../utils/index';
import Divider from "../../components/Divider";
import MyModalDropdown from "../../components/MyModalDropdown";
import ListPagination from "../../components/ListPagination";
import StepIndicator from 'react-native-step-indicator';
import {StepIndicatorStyles} from "react-native-step-indicator/lib/typescript/src/types";

interface IMyStepIndicator {
    labels:Array<any>;
    stepCount:number;
    customStyles?:StepIndicatorStyles;
    currentPosition?:number;
    direction?:'horizontal'|'vertical';
    onPress?:(index:number)=>void;
    renderStepIndicator?(args: {
        position: number;
        stepStatus: string;
    }): React.ReactNode;
    renderLabel?(args: {
        position: number;
        stepStatus: string;
        label: string;
        currentPosition: number;
    }): React.ReactNode;
}

/**
 * 步骤条
 * @param props
 * @constructor
 */
const MyStepIndicator:FC<IMyStepIndicator>=(props)=>{
    const {customStyles,stepCount,renderStepIndicator,onPress,labels,direction,currentPosition,renderLabel}=props
    return (
        <StepIndicator
            stepCount={stepCount}
      customStyles={customStyles}
            currentPosition={currentPosition}
            direction={direction}
            labels={labels}
            onPress={onPress}
            renderStepIndicator={renderStepIndicator}
            renderLabel={renderLabel}
        />
    )
}

MyStepIndicator.defaultProps = {
    customStyles : {
        stepIndicatorSize: scaleSizeW(25),
        currentStepIndicatorSize:scaleSizeW(25),
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
    currentPosition:0,
    direction:'horizontal',
}

export default MyStepIndicator;
