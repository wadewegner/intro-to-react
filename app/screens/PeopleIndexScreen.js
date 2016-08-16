import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, ListView, View, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

const people = [
  {firstName: "jorden", lastName: "leight", roomNumber: 30},
  {firstName: "will", lastName: "piers", roomNumber: 14},
  {firstName: "berkeley", lastName: "wanner", roomNumber: 8},

]

class PeopleIndexScreen extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    };
  }

  render() {
      console.log(this.props.navigator)
    return (
      <ViewContainer>
        <StatusBarBackground style={{backgroundColor: "white"}} />
        
        <ListView
          style={{marginTop: 100}}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => { return this._renderPersonRow(person) }}
          />
      </ViewContainer>
    );
  }

  _renderPersonRow(person) {
    return (
      <TouchableOpacity style={styles.personRow} onPress={(event) => this._navigateToPersonShow(person) }>
        <Text style={styles.personName}>{`${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" style={styles.personMoreIcon} />
      </TouchableOpacity>
    )
  }

  _navigateToPersonShow(person) {
      this.props.navigator.push({
          ident: "PersonShow",
          person: person
      })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50
  },
  personName: {
    marginLeft: 25
  },
  personMoreIcon: {
    color: "green",
    height: 15,
    width: 10,
    marginRight: 25
  }
});

module.exports = PeopleIndexScreen