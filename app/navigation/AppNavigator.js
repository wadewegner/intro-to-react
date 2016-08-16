import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet } from 'react-native';
import PeopleIndexScreen from '../screens/PeopleIndexScreen'
import PersonShowScreen from '../screens/PersonShowScreen'

class AppNavigator extends Component {

_renderScene(route, navigator) {
  var globalNavigatorProps = { navigator }

  switch(route.ident) {
    case "PeopleIndex":
      return (
        <PeopleIndexScreen {...globalNavigatorProps} />
      )
    case "PersonShow":
      return (
        <PersonShowScreen {...globalNavigatorProps} person={route.person} />
      )
    default:
      return (
        <PeopleIndexScreen {...globalNavigatorProps} />
      )
  }
}

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene} 
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight
        })} />
    );
  }
}

const styles = StyleSheet.create({
  navigatorStyles: {

  }
});

module.exports = AppNavigator
