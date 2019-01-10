import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import ListItem from './ListItem';
export default class Timeline extends Component {
    render() {
        return(
            <View>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            </View>
        );
    };
}
