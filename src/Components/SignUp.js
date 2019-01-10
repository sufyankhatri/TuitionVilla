import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import Input from '../common/Input';
export default class SignUp extends Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Your Name</Text>
                    <FormInput
                        placeholder='Name'
                        inputStyle={styles.inputStyle}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Address</Text>
                    <FormInput
                        placeholder='Address'
                        inputStyle={styles.inputStyle}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Contact Number</Text>
                    <FormInput
                        placeholder='Contact No..'
                        inputStyle={styles.inputStyle}
                    />
                </View>
                <Text style={styles.textStyle}>Adddress</Text>
                <View style={styles.containerStyle}>
                    <FormInput
                        placeholder='Address'
                        inputStyle={styles.inputStyle}
                    />
                </View>

                <Text style={styles.textStyle}>CNIC</Text>
                <View style={styles.containerStyle}>
                    <FormInput
                        placeholder='CNIC'
                        inputStyle={styles.inputStyle}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Age</Text>
                    <FormInput
                        placeholder='Age'
                        inputStyle={styles.inputStyle}
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
        borderRadius: 10,
        width: "100%",
        fontSize: 18,
        fontWeight:'300',
        paddingLeft: 10

    },
    textStyle: {
        paddingLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 5
    }

};