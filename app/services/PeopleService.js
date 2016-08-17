"use strict";

import _ from 'lodash'

const people = [
    {id: 1, firstName: "jorden", lastName: "leight", roomNumber: 30},
    {id: 2, firstName: "will", lastName: "piers", roomNumber: 14},
    {id: 3, firstName: "berkeley", lastName: "wanner", roomNumber: 8},
    {id: 4, firstName: "jackie", lastName: "smith", roomNumber: 8},
    {id: 5, firstName: "simon", lastName: "johnson", roomNumber: 8},
    {id: 6, firstName: "michael", lastName: "taylor", roomNumber: 8},
    {id: 7, firstName: "ernst", lastName: "cannon", roomNumber: 8},
    {id: 8, firstName: "eugene", lastName: "lusso", roomNumber: 8},
    {id: 9, firstName: "hayley", lastName: "rapp", roomNumber: 8},
];

exports.GetPeople = function() {
    return people;
}

exports.GetPerson = function(id) {
    var person = _.filter(people, {id: id})[0]
    return person;
}