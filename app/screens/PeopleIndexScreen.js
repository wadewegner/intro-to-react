'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, ListView, View, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

var PeopleSrc = require("../services/PeopleService.js");

class PeopleIndexScreen extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      peopleDataSource: ds.cloneWithRows(PeopleSrc.GetPeople())
    };
  }

  render() {
    return (
      <ViewContainer
        screenTitle="PEOPLE">
        
        <ListView style={{marginTop:-25}}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => { return this._renderPersonRow(person) }}
          />

      </ViewContainer>
    );
  }

  _renderPersonRow(person) {
    return (
      <TouchableOpacity style={styles.personRow} onPress={(event) => this._navigateToPersonShow(person.id) }>
        <Text style={styles.personName}>{`${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" style={styles.personMoreIcon} />
      </TouchableOpacity>
    )
  }

  _navigateToPersonShow(id) {
      this.props.navigator.push({
          ident: "PersonShow",
          id: id
      })
  }
}

const styles = StyleSheet.create({
  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 30
  },
  personName: {
    
  },
  personMoreIcon: {
    color: "green",
    height: 15,
    width: 10,
    marginRight: 25
  }
});

module.exports = PeopleIndexScreen