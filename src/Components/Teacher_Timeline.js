import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import ListItem from './ListItem';
import {teacherFetch} from '../actions';
import {connect} from 'react-redux';
class Teacher_Timeline extends Component {
componentDidMount(){
    console.log("component did mount");
    this.props.teacherFetch();
}
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




export default connect(null, {
     teacherFetch
})(Teacher_Timeline);