import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
interface IMyCollapsible<T> {
    type: 'Collapsible' | 'Accordion';
    collapsed?: boolean;
    align?: 'top' | 'center' | 'bottom';
    collapsedHeight?: number;
    style?: StyleProp<ViewStyle>;
    sections?: T[];
    activeSections?: number[];
    renderSectionTitle?: (content: T, index: number, isActive: boolean, sections: T[]) => React.ReactElement<{}>;
    renderHeader?: (content: T, index: number, isActive: boolean, sections: T[]) => React.ReactElement<{}>;
    renderContent?: (content: T, index: number, isActive: boolean, sections: T[]) => React.ReactElement<{}>;
    renderFooter?: (content: T, index: number, isActive: boolean, sections: T[]) => React.ReactElement<{}>;
    onChange?: (indexes: number[]) => void;
    disabled?: boolean;
    expandFromBottom?: boolean;
    expandMultiple?: boolean;
    sectionContainerStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    children?: React.ReactChild;
}
/**
 * 折叠面板
 * @param props
 * @constructor
 */
declare const MyCollapsible: {
    (props: IMyCollapsible<any>): any;
    defalutProps: {
        collapsed: boolean;
        align: string;
        collapsedHeight: number;
        style: {};
        sections: never[];
        activeSections: never[];
        renderSectionTitle: undefined;
        renderHeader: undefined;
        renderContent: undefined;
        renderFooter: undefined;
        onChange: undefined;
        disabled: boolean;
        expandFromBottom: boolean;
        expandMultiple: boolean;
        sectionContainerStyle: {};
        containerStyle: {};
    };
};
export default MyCollapsible;
