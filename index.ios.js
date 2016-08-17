'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TabBarIOS } from 'react-native';
import AppNavigator from './app/navigation/AppNavigator'
import Icon from 'react-native-vector-icons/Octicons'
import Icon2 from 'react-native-vector-icons/EvilIcons'

class abcrn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTab: "peopleTab"
    }
  }

  render() {
    return (

      <TabBarIOS
        selectedTab={this.state.selectedTab}>
      
      <Icon.TabBarItemIOS
        selected={this.state.selectedTab === "peopleTab"}
        title={`PEOPLE`}
        onPress={() => this.setState({selectedTab: "peopleTab"})}
        iconName="organization">

          <AppNavigator 
            initialRoute={{ident: "PeopleIndex"}}
          />

      </Icon.TabBarItemIOS>

      <Icon2.TabBarItemIOS
        selected={this.state.selectedTab === "settingsTab"}
        title={`SETTINGS`}
        onPress={() => this.setState({selectedTab: "settingsTab"})}
        iconName="gear">

          <AppNavigator 
            initialRoute={{ident: "Settings"}}
          />

      </Icon2.TabBarItemIOS>

      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('abcrn', () => abcrn);
