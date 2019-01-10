import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Button, FormInput, CheckBox } from 'react-native-elements';
import Input from '../common/Input';
export default class AdditionalInfo extends Component {
    state = {
        nine: false,
        ten:false,
        eleven:false,
        twelve:false,
        physics:false,
        chemistry:false,
        math:false
    }

    Checkpress() {

        this.setState({ checked: !this.state.checked });
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Education</Text>
                    <FormInput
                        placeholder='Education'
                        inputStyle={styles.inputStyle}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Experience</Text>
                    <FormInput
                        placeholder='Experience (in Years)'
                        inputStyle={styles.inputStyle}
                    />
                </View>
                <Text style={styles.textStyle}>Class</Text>
                <View style={styles.containerStyle}>
                    <CheckBox title='IX'
                        checked={this.state.nine}
                        onPress={()=>{this.setState({ nine: !this.state.nine  })}}
                    />
                    <CheckBox title='X'
                        checked={this.state.ten}
                        onPress={()=>{this.setState({ ten: !this.state.ten  })}}
                    />
                    <CheckBox title='XI'
                        checked={this.state.eleven}
                        onPress={()=>{this.setState({ eleven: !this.state.eleven  })}}
                    />
                    <CheckBox title='XII'
                        checked={this.state.twelve}
                        onPress={()=>{this.setState({ twelve: !this.state.twelve  })}}
                    />

                </View>
                <Text style={styles.textStyle}>Subject Specialization</Text>
                <View style={styles.containerStyle}>
                    <CheckBox title='Physics'
                        checked={this.state.physics}
                        onPress={()=>{this.setState({ physics: !this.state.physics  })}}
                    />
                    <CheckBox title='Maths'
                        checked={this.state.math}
                        onPress={()=>{this.setState({ math: !this.state.math  })}}
                    />
                    <CheckBox title='Chemistry'
                        checked={this.state.chemistry}
                        onPress={()=>{this.setState({ chemistry: !this.state.chemistry  })}}
                    />

                </View>
                <View style={{ paddingBottom: 20 }}>
                    <Button title='Sign Up'
                        backgroundColor='#000080'
                        buttonStyle={styles.buttonStyle}
                    />
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
        fontWeight:'bold',
        paddingBottom: 5

    }

};