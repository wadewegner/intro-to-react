'use strict';

import React, { Component } from 'react';
import { AppRegistry, TabBarIOS } from 'react-native';
import AppNavigator from './app/navigation/AppNavigator'
import Octicons from 'react-native-vector-icons/Octicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

class abcrn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTab: "peopleTab"
    }
  }

  render() {
    return (

      <TabBarIOS selectedTab={this.state.selectedTab}>
        
        <Octicons.TabBarItemIOS
          selected={this.state.selectedTab === "peopleTab"}
          title={`PEOPLE`}
          onPress={() => this.setState({selectedTab: "peopleTab"})}
          iconName="organization">

            <AppNavigator initialRoute={{ident: "PeopleIndex"}} />

        </Octicons.TabBarItemIOS>

        <EvilIcons.TabBarItemIOS
          selected={this.state.selectedTab === "settingsTab"}
          title={`SETTINGS`}
          onPress={() => this.setState({selectedTab: "settingsTab"})}
          iconName="gear">

            <AppNavigator initialRoute={{ident: "Settings"}} />

        </EvilIcons.TabBarItemIOS>

      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('abcrn', () => abcrn);
