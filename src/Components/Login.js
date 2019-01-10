import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { FormInput, CheckBox } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
export default class Login extends Component {
    render() {
        return (
            <View style={styles.loginStyle}>
                <Image
                    style={styles.imageStyle}
                    source={require('../../Icons/logo.png')} />
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Email </Text>
                    <FormInput
                        placeholder='example@test.com'
                        inputStyle={styles.inputStyle}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Password</Text>
                    <FormInput
                        placeholder='password'
                        inputStyle={styles.inputStyle}
                    />
                </View>
                <View style={styles.checkBoxContainer}>
               <CheckBox title="Teacher" containerStyle={styles.checkBoxStyle} checked={true}/>
               <CheckBox title="Student" containerStyle={styles.checkBoxStyle} checked={false}/>
               </View>
                <TouchableOpacity style={styles.ButtonStyle} onPress={() => { Actions.timeline() }}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
               
                <TouchableOpacity style={styles.ButtonStyle} onPress={() => { Actions.Information() }}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = {
    loginStyle: {
        width: '90%',
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 30
    },
    containerStyle: {
        paddingBottom: 5,
        alignSelf: 'center'


    },
    textStyle: {
        paddingLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    inputStyle: {
        height: 50,
        borderColor: "#002966",
        borderBottomWidth: 1,
        fontSize: 18,
        fontWeight: '300',
        paddingLeft: 10

    },
    imageStyle: {
        width: "95%",
        height: "30%",
        paddingTop: 20
    },
    ButtonStyle: {
        alignSelf: 'center',
        paddingBottom: 5,
        marginBottom:5,
        marginTop:5,
        paddingTop: 5,
        width:"95%",
        borderWidth:2,
        borderRadius: 5,
        backgroundColor:'#000080'


    },
    buttonText:{
        alignSelf:'center',
        fontSize:18,
        color:'#fff',
        fontWeight:'bold'
        
    },
    checkBoxStyle:{
        width:'42.5%',
        alignSelf:'flex-start',
        borderWidth:2,
        
        
    },
    checkBoxContainer:{
        flexDirection:'row',
        paddingBottom:10
    }
};