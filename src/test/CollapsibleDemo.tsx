import React, {Component} from 'react';
import {MyCheckbox, MyCollapsible} from '../../components/index';
import {View, Text} from 'react-native';

const SECTIONS = [
  {
    title: 'First点击',
    content: 'Lorem ipsum...\ngwgwegegeg\nffefgefef\nfefefefe',
  },
  {
    title: 'Second点击',
    content: 'Lorem ipsum...\ngwgwegegeg\nffefgefef\nfefefefe',
  },
];

export default class CollapsibleDemo extends Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = section => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  _renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({activeSections});
  };

  render() {
    return (
      <MyCollapsible
        type="Accordion"
        sections={SECTIONS}
        activeSections={this.state.activeSections}
        // renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
    );
  }
}

const styles = {};
