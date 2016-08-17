'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, ListView } from 'react-native';
import ViewContainer from '../components/ViewContainer'
import _ from 'lodash'

var PeopleSrc = require("../services/PeopleService.js");

class PeopleShowScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
        person: PeopleSrc.GetPerson(this.props.id)
    }
  }

  render() {
    return (
      <ViewContainer
        screenTitle="PERSON">

        <Text style={styles.personName}>{`${_.capitalize(this.state.person.firstName)} ${_.capitalize(this.state.person.lastName)}`}</Text>
        
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  personName: {
    height: 50
  }
});

module.exports = PeopleShowScreen