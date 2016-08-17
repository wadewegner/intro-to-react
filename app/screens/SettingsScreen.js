'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ViewContainer from '../components/ViewContainer'

class SettingsScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ViewContainer
        screenTitle="SETTINGS">

      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
});

module.exports = SettingsScreen