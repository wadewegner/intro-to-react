"use strict";

import _ from 'lodash'

const people = [
    {id: 1, firstName: "jorden", lastName: "leight", age: 30},
    {id: 2, firstName: "will", lastName: "piers", age: 14},
    {id: 3, firstName: "berkeley", lastName: "wanner", age: 8},
    {id: 4, firstName: "jackie", lastName: "smith", age: 53},
    {id: 5, firstName: "simon", lastName: "johnson", age: 28},
    {id: 6, firstName: "michael", lastName: "taylor", age: 25},
    {id: 7, firstName: "ernst", lastName: "hoggels", age: 65},
    {id: 8, firstName: "eugene", lastName: "lusso", age: 35},
    {id: 9, firstName: "justin", lastName: "rapp", age: 18},
];

exports.GetPeople = function() {
    return people;
}

exports.GetPerson = function(id) {
    var person = _.filter(people, {id: id})[0]
    return person;
}