import React,{Component} from 'react';
import {Text,View} from 'react-native';
import {connect} from 'react-redux';
import Card from '../common/Card'
import CardSection  from '../common/CardSection';
import Input from '../common/Input';
import Button from '../common/Button';
import Spinner from '../common/Spinner';
import { emailChanged,passwordChanged, loginUser } from './actions';

class LoginForm extends Component {
    onEmailChange(text) {
      this.props.emailChanged(text);
    }
  
    onPasswordChange(text) {
      this.props.passwordChanged(text);
    }
  
    onButtonPress() {
      const { email, password } = this.props;
  
      this.props.loginUser({ email, password });
    }
  
    renderButton() {
      if (this.props.loading) {
        return <Spinner size="large" />;
      }
  
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Login
        </Button>
      );
    }
  
    render() {
      return (
        <View> 
            <Input
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
            <Input
              secureTextEntry
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
  
          
            {this.renderButton()}
          
        </View>
      );
    }
  }
  
  const styles = {
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
  };
  
  const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
  
    return { email, password, error, loading };
  };
  
  export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
  })(LoginForm);