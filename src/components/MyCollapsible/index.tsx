import React, {Component, PureComponent, ReactChildren} from 'react';
import Collapsible from 'react-native-collapsible';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

interface IMyCollapsible<T> {
  type: 'Collapsible' | 'Accordion';
  collapsed?: boolean;
  align?: 'top' | 'center' | 'bottom';
  collapsedHeight?: number;
  style?: StyleProp<ViewStyle>;
  sections?: T[];
  activeSections?: number[];
  renderSectionTitle?: (
    content: T,
    index: number,
    isActive: boolean,
    sections: T[],
  ) => React.ReactElement<{}>;
  renderHeader?: (
    content: T,
    index: number,
    isActive: boolean,
    sections: T[],
  ) => React.ReactElement<{}>;
  renderContent?: (
    content: T,
    index: number,
    isActive: boolean,
    sections: T[],
  ) => React.ReactElement<{}>;
  renderFooter?: (
    content: T,
    index: number,
    isActive: boolean,
    sections: T[],
  ) => React.ReactElement<{}>;
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
const MyCollapsible = (props: IMyCollapsible<any>) => {
  const {
    type,
    collapsed,
    align,
    collapsedHeight,
    style,
    children,
    sections,
    activeSections,
    renderSectionTitle,
    renderHeader,
    renderContent,
    renderFooter,
    onChange,
    disabled,
    expandFromBottom,
    expandMultiple,
    sectionContainerStyle,
    containerStyle,
  } = props;
  switch (type) {
    case 'Collapsible':
      return (
          <Collapsible
              collapsed={collapsed}
              align={align}
              collapsedHeight={collapsedHeight}
              easing={'linear'}
              style={style}>
            {children}
          </Collapsible>
      )
    case 'Accordion':
      return (
        <Accordion
          sections={sections}
          activeSections={activeSections}
          renderSectionTitle={renderSectionTitle}
          renderHeader={renderHeader}
          renderContent={renderContent}
          renderFooter={renderFooter}
          onChange={onChange}
          underlayColor={'#ccc'}
          align={align}
          easing={'linear'}
          disabled={disabled}
          touchableComponent={TouchableOpacity}
          expandFromBottom={expandFromBottom}
          expandMultiple={expandMultiple}
          sectionContainerStyle={sectionContainerStyle}
          containerStyle={containerStyle}
        />
      );
  }
};

MyCollapsible.defalutProps = {
  collapsed: false,
  align: 'top',
  collapsedHeight: 0,
  style: {},
  sections: [],
  activeSections: [],
  renderSectionTitle: undefined,
  renderHeader: undefined,
  renderContent: undefined,
  renderFooter: undefined,
  onChange: undefined,
  disabled: false,
  expandFromBottom: true,
  expandMultiple: false,
  sectionContainerStyle: {},
  containerStyle: {},
};

export default MyCollapsible;
