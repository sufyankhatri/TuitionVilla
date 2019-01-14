import React, { Component } from 'react';
import { Button, FormInput } from 'react-native-elements';
import Input from '../common/Input';
import { teacherUpdate }  from '../actions';
import { Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {Actions}  from 'react-native-router-flux';
class SignUp extends Component {


    ImageClicked(){
        Actions.gallery();
    }
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
              
                <View>
                <TouchableOpacity style={styles.ButtonStyle} onPress={this.ImageClicked.bind(this)}>
                    <Text style={styles.buttonText}>Choose an Image</Text>
                </TouchableOpacity>
                </View>
              
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Your Name</Text>
                    <FormInput
                        placeholder='Name'
                        inputStyle={styles.inputStyle}
                        onChangeText={value => this.props.teacherUpdate({ prop: 'name', value })}
                        value={this.props.name}

                    />
                </View>

                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Address</Text>
                    <FormInput
                        placeholder='Address'
                        inputStyle={styles.inputStyle}
                        onChangeText={value => this.props.teacherUpdate({ prop: 'address', value })}
                        value={this.props.address}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Contact Number</Text>
                    <FormInput
                        placeholder='Contact No..'
                        inputStyle={styles.inputStyle}
                        onChangeText={value => this.props.teacherUpdate({ prop: 'phone', value })}
                        value={this.props.phone}
                    />
                </View>
                <Text style={styles.textStyle}>CNIC</Text>
                <View style={styles.containerStyle}>
                    <FormInput
                        placeholder='CNIC'
                        inputStyle={styles.inputStyle}
                        onChangeText={value => this.props.teacherUpdate({ prop: 'cnic', value })}
                        value={this.props.cnic}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Age</Text>
                    <FormInput
                        placeholder='Age'
                        inputStyle={styles.inputStyle}
                        onChangeText={value => this.props.teacherUpdate({ prop: 'age', value })}
                        value={this.props.age}
                    />
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

    },
    ButtonStyle: {
        paddingBottom: 10,
        marginBottom: 10,
        marginTop: 10,
        paddingTop: 10,
        paddingLeft: 10,
        width: "100%",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#fff',
        backgroundColor: '#000080'


    }

};


const mapStateToProps = (state) => {
    const { email, password, name, phone, address, cnic, age } = state.teacher;

    return { email, password, name, phone, address, cnic, age };
};

export default connect(mapStateToProps, { teacherUpdate })(SignUp);