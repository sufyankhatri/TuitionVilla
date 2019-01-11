import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import { signOut} from '../actions'
class drawer extends Component {

    SignOutPressed(){
            this.props.signOut();
    }
    render() {
        return (
            <View style={{ backgroundColor: '#ffffff', height: "100%" }}>
                <View style={{ paddingBottom: 50 }}>
                    <Image
                        style={{ width: "100%", height: "30%", paddingTop: 40 }}
                        source={require('../../Icons/logo.png')} />
                </View>
                <TouchableOpacity style={styles.drawel} onPress={() => { Actions.Information() }}>
                    <Text style={styles.element}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawel} onPress={() => { Actions.Information() }}>
                    <Text style={styles.element}>My Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    paddingTop: 25,
                    borderTopWidth: 2,
                    borderBottomWidth: 2,
                    backgroundColor: '#e6e6ff'
                }} onPress={() => { Actions.additionalInfo() }}>
                    <Text style={styles.element}>Additional Info</Text>
                </TouchableOpacity>

                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                }}>
                    <TouchableOpacity style={styles.ButtonStyle} onPress={ this.SignOutPressed.bind(this)}>
                        <Text style={styles.buttonText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}
const styles = {
    element: {
        fontSize: 19,
        paddingLeft: 15,
        color: '#000099'

    },
    drawel: {
        paddingTop: 25,
        borderTopWidth: 2,
        backgroundColor: '#e6e6ff'


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
        width: "245%",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#fff',
        backgroundColor: '#000080'


    }
};


const mapStateToProps = ({ auth }) => {
    const { signOut } = auth;

    return { signOut };
};

export default connect(mapStateToProps, {
   signOut
})(drawer);