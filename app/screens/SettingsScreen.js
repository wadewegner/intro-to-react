'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import ViewContainer from '../components/ViewContainer'

class SettingsScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ViewContainer
        screenTitle="SETTINGS">

        <Text>Not yet implemented.</Text>

      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
});

module.exports = SettingsScreen