'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, ListView, View, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

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