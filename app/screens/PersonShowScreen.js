import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, ListView, View, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

class PeopleShowScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
      console.log(this.props.navigator)
    return (
      <ViewContainer style={{backgroundColor:"mistyrose"}}>
        <StatusBarBackground style={{backgroundColor: "mistyrose"}} />

        <TouchableOpacity onPress={() => this.props.navigator.pop() }>
          <Icon name="times" size={30} />
        </TouchableOpacity>

        <Text style={{marginTop: 100, fontSize:20}}>{`PERSON SHOW SCREEN`}</Text>
        <Text style={styles.personName}>{`${_.capitalize(this.props.person.firstName)} ${_.capitalize(this.props.person.lastName)}`}</Text>
        
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  personName: {
    marginLeft: 25
  }
});

module.exports = PeopleShowScreen