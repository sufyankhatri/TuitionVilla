import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import ListItem from './ListItem';
import {studentFetch} from '../actions/StudentActions';
import {connect} from 'react-redux';

class Student_Timeline extends Component {
    componentDidMount(){
        console.log("component will mount");
        this.props.studentFetch(); 
       }
    PressFetch(){
        this.props.studentFetch();
    }
    render() {
        return(
            
            <View>
            <TouchableOpacity onPress={()=>this.PressFetch()}>
                <Text>hello</Text>
                </TouchableOpacity>    
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
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
    studentFetch
})(Student_Timeline);