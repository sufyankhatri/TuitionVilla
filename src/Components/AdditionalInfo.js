import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { Button, FormInput, CheckBox } from 'react-native-elements';
import Input from '../common/Input';
import { connect } from 'react-redux';
import { teacherUpdate, ClassInput, SubjectInput, signUser } from '../actions';
import Spinner from '../common/Spinner';
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
    onClassChange = (condition, val) => {
        this.props.ClassInput({ condition, val });
    }

    onSubjectChange = (condition, val) => {
        this.props.SubjectInput({ condition, val });
    }
    Checkpress() {

        this.setState({ checked: !this.state.checked });
    }
    SignInPressed() {
        const { email, password, name, phone, address, cnic, age, education, experience, subjects, classes } = this.props;
        this.props.signUser({ email, password, name, phone, address, cnic, age, education, experience, subjects, classes });
    }

    renderSignInButton() {
        if (this.props.SignInLoading) {
            return <Spinner size="large" />;
        }

        return (
            <TouchableOpacity style={styles.ButtonStyle} onPress={this.SignInPressed.bind(this)}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

        );
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
                        onPress={() => { this.setState({ nine: !this.state.nine }); this.onClassChange(!this.state.nine, "nine") }}
                    />
                    <CheckBox title='X'
                        checked={this.state.ten}
                        onPress={() => { this.setState({ ten: !this.state.ten }); this.onClassChange(!this.state.ten, "ten") }}
                    />
                    <CheckBox title='XI'
                        checked={this.state.eleven}
                        onPress={() => { this.setState({ eleven: !this.state.eleven }); this.onClassChange(!this.state.eleven, "eleven") }}
                    />
                    <CheckBox title='XII'
                        checked={this.state.twelve}
                        onPress={() => { this.setState({ twelve: !this.state.twelve }); this.onClassChange(!this.state.twelve, "twelve") }}
                    />

                </View>
                <Text style={styles.textStyle}>Subject Specialization</Text>
                <View style={styles.containerStyle}>
                    <CheckBox title='Physics'
                        checked={this.state.physics}
                        onPress={() => { this.setState({ physics: !this.state.physics }); this.onSubjectChange(!this.state.physics, "physics") }}
                    />
                    <CheckBox title='Maths'
                        checked={this.state.math}
                        onPress={() => { this.setState({ math: !this.state.math }); this.onSubjectChange(!this.state.math, "math") }}
                    />
                    <CheckBox title='Chemistry'
                        checked={this.state.chemistry}
                        onPress={() => { this.setState({ chemistry: !this.state.chemistry }); this.onSubjectChange(!this.state.chemistry, "chemistry") }}
                    />

                </View>
                <View>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>

                </View>
                <View>
                    {this.renderSignInButton()}
                </View>

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


    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }

};

const mapStateToProps = (state) => {
    const {  email, password, name, phone, address, cnic, age, education, experience, subjects, classes } = state.teacher;
   
    const {SignInLoading, error} = state.sign;
    return { SignInLoading, email,error, password, name, phone, address, cnic, age, education, experience, subjects, classes };
};

export default connect(mapStateToProps, { teacherUpdate, ClassInput, SubjectInput, signUser })(AdditionalInfo);