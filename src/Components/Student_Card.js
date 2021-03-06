import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
//import Image1 from '../../assets/download.jpg'
import { Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { onSelectedStudent } from '../actions/StudentActions';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

export class Student_Card extends Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', width: "100%", height: 100, backgroundColor: "#e3e3ed", borderColor: "steelblue", borderWidth: 1, marginBottom: 10, borderRadius: 10 }}>
                <View style={{ width: "25%", height: "100%", paddingTop: 10 }} >
                    <Avatar
                        large
                        rounded
                        source={{ uri: this.props.student.uri }}
                        activeOpacity={0.7}
                    />
                </View>

                <View style={{ width: "50%", height: "100%", paddingTop: 10 }} >
                    <Text style={{ paddingTop: 5, fontSize: 15, fontWeight: "bold", color: "black" }}>{this.props.student.name}</Text>
                    <Text>{this.props.student.email}</Text>
                </View>
                <View style={{ justifyContent: "center", width: "25%", height: "100%" }} >
                    <TouchableOpacity onPress={() => {
                        this.props.onSelectedStudent(this.props.student.uid)
                        Actions.student_profileSelected()
                    }}
                        style={{ justifyContent: "center", alignItems: "center", borderColor: "steelblue", width: "100%", borderWidth: 1, height: "50%" }}>
                        <Icon
                            name='md-person'
                            size={25}
                            color='steelblue'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.onSelectedStudent(this.props.student.uid)
                        Actions.Chat({
                            name: this.props.student.uri
                        })
                    }} style={{ justifyContent: "center", alignItems: "center", borderColor: "steelblue", width: "100%", height: "50%", borderWidth: 1 }}>
                        <Icon
                            name='md-chatboxes'
                            size={25}
                            color='steelblue'
                            onPress={() => Actions.Chat()}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


export default connect(null, { onSelectedStudent })(Student_Card)