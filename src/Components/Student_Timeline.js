import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import ListItem from './ListItem';
export default class Student_Timeline extends Component {
    render() {
        return(
            <View>
            <View  style={styles.containerStyle}>
        
               
            </View>
            <View>
                
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            </View>
            </View>
        );
    };
}
const styles= {
    containerStyle: {
        paddingTop: 5,
        paddingBottom: 10,
        borderBottomWidth: 1,
        marginBottom: 20,

    }
}