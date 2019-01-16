import React, { Component } from 'react';
import { Button, FormInput } from 'react-native-elements';
import Input from '../common/Input';
import { teacherUpdate } from '../actions';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import PickImage from './PickImage';
class SignUp extends Component {


    
    render() {
        return (
            <ScrollView>
                <View style={styles.containerStyle}>

                    <Text style={styles.textStyle}>Email</Text>
                    <FormInput
                        placeholder='example@gmail.com'
                        inputStyle={styles.inputStyle}
                        onChangeText={value => this.props.teacherUpdate({ prop: 'email', value })}
                        value={this.props.email}

                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Password</Text>
                    <FormInput
                        placeholder='password'
                        inputStyle={styles.inputStyle}
                        secureTextEntry
                        onChangeText={value => this.props.teacherUpdate({ prop: 'password', value })}
                        value={this.props.password}

                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Profile Picture</Text>
                    <PickImage />
                </View>

                           </ScrollView>
        );
    }
}

const styles = {
    containerStyle: {
        paddingTop: 5,
        paddingBottom: 10,
        borderBottomWidth: 1,
        marginBottom: 20,

    },
    inputStyle: {
        height: 50,
        backgroundColor: "#fff",
        borderColor: "#002966",
        borderWidth: 1,
        borderRadius: 3,
        width: "100%",
        fontSize: 18,
        fontWeight: '300',
        paddingLeft: 10

    },
    textStyle: {
        paddingLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#fff'

    }
};


const mapStateToProps = (state) => {
    const { email, password, name, phone, address, cnic, age } = state.teacher;

    return { email, password, name, phone, address, cnic, age };
};

export default connect(mapStateToProps, { teacherUpdate })(SignUp);