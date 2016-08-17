'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import StatusBarBackground from '../components/StatusBarBackground'

class ViewContainer extends Component {
    render() {
        return (
            <View style={[styles.viewContainer, this.props.style || {}]}>
                <StatusBarBackground style={styles.statusBarBackground} />

                <View style={styles.screenTitleView}>
                    <Text>{this.props.screenTitle || `UNTITLED`}</Text>
                </View>

                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    viewContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        marginTop: 25, 
        marginLeft: 25
    },
    screenTitleView: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 10,
        marginLeft: -25,
        height:50
    },
    screenTitleText: {
        
    },
    statusBarBackground: {
        backgroundColor: "white",
    }
})

module.exports = ViewContainer