import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { Button, FormInput, CheckBox } from 'react-native-elements';
import Input from '../common/Input';
import { connect } from 'react-redux';
import { teacherUpdate, teacherCreate } from '../actions';

class AdditionalInfo extends Component {
    state = {
        nine: false,
        ten: false,
        eleven: false,
        twelve: false,
        physics: false,
        chemistry: false,
        math: false
    }

    Checkpress() {

        this.setState({ checked: !this.state.checked });
    }
    SignInPressed(){
        const { name, phone, address, cnic, age, education, experience}= this.props;
        console.log("phone");
        console.log({phone});
        this.props.teacherCreate({name, phone, address, cnic, age, education, experience});
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Education</Text>
                    <FormInput
                        placeholder='Education'
                        inputStyle={styles.inputStyle}
                        onChangeText={value => this.props.teacherUpdate({ prop: 'education', value })}
                        value={this.props.education}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Experience</Text>
                    <FormInput
                        placeholder='Experience (in Years)'
                        inputStyle={styles.inputStyle}
                        onChangeText={value => this.props.teacherUpdate({ prop: 'experience', value })}
                        value={this.props.experience}
                    />
                </View>
                <Text style={styles.textStyle}>Class</Text>
                <View style={styles.containerStyle}>
                    <CheckBox title='IX'
                        checked={this.state.nine}
                        onPress={() => { this.setState({ nine: !this.state.nine }) }}
                    />
                    <CheckBox title='X'
                        checked={this.state.ten}
                        onPress={() => { this.setState({ ten: !this.state.ten }) }}
                    />
                    <CheckBox title='XI'
                        checked={this.state.eleven}
                        onPress={() => { this.setState({ eleven: !this.state.eleven }) }}
                    />
                    <CheckBox title='XII'
                        checked={this.state.twelve}
                        onPress={() => { this.setState({ twelve: !this.state.twelve }) }}
                    />

                </View>
                <Text style={styles.textStyle}>Subject Specialization</Text>
                <View style={styles.containerStyle}>
                    <CheckBox title='Physics'
                        checked={this.state.physics}
                        onPress={() => { this.setState({ physics: !this.state.physics }) }}
                    />
                    <CheckBox title='Maths'
                        checked={this.state.math}
                        onPress={() => { this.setState({ math: !this.state.math }) }}
                    />
                    <CheckBox title='Chemistry'
                        checked={this.state.chemistry}
                        onPress={() => { this.setState({ chemistry: !this.state.chemistry }) }}
                    />

                </View>
                <TouchableOpacity style={styles.ButtonStyle} onPress={this.SignInPressed.bind(this)}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = {
    containerStyle: {
        paddingTop: 10,
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
        paddingLeft: 10

    },
    buttonStyle: {
        borderRadius: 10,


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
    const { name, phone, address, cnic, age, education, experience } = state.teacher;

    return { name, phone, address, cnic, age, education, experience };
};

export default connect(mapStateToProps, { teacherUpdate, teacherCreate })(AdditionalInfo);