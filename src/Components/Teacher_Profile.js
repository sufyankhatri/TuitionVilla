import React, { Component } from 'react'
import { View, StyleSheet, BackHandler } from 'react-native'
import Teacher_ProfileItems from './Teacher_ProfileItems'
import { Avatar } from 'react-native-elements'
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux'

export class Teacher_Profile extends Component {
    componentDidMount() {
        if (this.props.student) {
            this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
                Actions.student_timeline(); // works best when the goBack is async
                return true;
            });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.coverPhoto}>
                    <Avatar
                        xlarge
                        rounded
                        source={{ uri: this.props.selectedTeacher.uri }}

                    />
                </View>
                <View style={styles.profileItem}>
                    <Teacher_ProfileItems Teacher={this.props.selectedTeacher} />
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    coverPhoto: {
        width: "100%",
        height: "40%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "steelblue"
    },
    profileItem: {
        width: "100%",
        height: "60%",
    }
})

mapStateToProps = (state) => {
    const { selectedTeacher, uri } = state.teacher;
    const{student,teacher}= state.auth
    return { selectedTeacher, uri, student, teacher }
}

export default connect(mapStateToProps)(Teacher_Profile)