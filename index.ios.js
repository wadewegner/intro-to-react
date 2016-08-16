import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TabBarIOS } from 'react-native';
import AppNavigator from './app/navigation/AppNavigator'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/EvilIcons'

class abcrn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTab: "tab1"
    }
  }

  render() {
    return (

      <TabBarIOS
        selectedTab={this.state.selectedTab}>
      
      <Icon.TabBarItemIOS
        selected={this.state.selectedTab === "tab1"}
        title={`TAB 1`}
        onPress={() => this.setState({selectedTab: "tab1"})}
        iconName="user">

          <AppNavigator 
            initialRoute={{ident: "PeopleIndex"}}
          />

      </Icon.TabBarItemIOS>

      <Icon.TabBarItemIOS
        selected={this.state.selectedTab === "tab2"}
        title={`TAB 2`}
        onPress={() => this.setState({selectedTab: "tab2"})}
        iconName="warning">

          <AppNavigator 
            initialRoute={{ident: "PersonShow",
                           person: {firstName: "berkeley", lastName: "wanner", roomNumber: 8}}}
          />

      </Icon.TabBarItemIOS>

      <Icon2.TabBarItemIOS
        selected={this.state.selectedTab === "tab3"}
        title={`TAB 3`}
        onPress={() => this.setState({selectedTab: "tab3"})}
        iconName="bell">

          <AppNavigator 
            initialRoute={{ident: "PersonShow",
                           person: {firstName: "will", lastName: "piers", roomNumber: 14}}}
          />

      </Icon2.TabBarItemIOS>

      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('abcrn', () => abcrn);
