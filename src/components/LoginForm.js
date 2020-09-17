import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';


class LoginForm extends React.Component{

  onEmailChanged(email){
    this.props.setEmail(email);
  }

  onPasswordChanged(password){
    this.props.setPassword(password);
  }

  onLoginUser(){
    const { email, password } = this.props;
    this.props.loginUser({email, password});
  }

  renderError(){
    const {errorMessage} = this.props;
    if(errorMessage){
      return (<View>
                <Text style={styles.errorStyle}>{errorMessage}</Text>
              </View>);
    }
  }

  renderLoading(){
    if(this.props.loading){
      return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 50}}>
               <ActivityIndicator size='large' color="#00ff00" />
             </View>
    }
    return <Button onPress={this.onLoginUser.bind(this)}>
            Log in
           </Button>
  }

  render(){
    const { email, password } = this.props;
    return (<View style={{ flex: 1 }}>
              <View style={styles.logoViewStyle}>
                <Text style={styles.logoTextStyle}>Sign in</Text>
              </View>
              <View style={styles.container}>
                <CardSection>
                <Input
                  placeholder='Enter email'
                  label='Email'
                  value={email}
                  onChangeText={this.onEmailChanged.bind(this)} />
                </CardSection>
                <CardSection>
                <Input
                  placeholder='Enter password'
                  label='Password'
                  value={password}
                  secureTextEntry
                  onChangeText={this.onPasswordChanged.bind(this)} />
                  </CardSection>
                <CardSection>
                  {this.renderLoading()}
                </CardSection>
                {this.renderError()}
              </View>
            </View>
         );
  }
}


const styles = {
  container: {
    flex: 1,
    margin: 10,
    marginTop: 20,
  },
  logoViewStyle: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTextStyle: {
    fontSize: 28
  },
  errorStyle: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 20
  }
}


const mapStateToProps = (state) => {
  const { email, password, errorMessage, loading } = state.auth;
  return { email, password, errorMessage, loading };
}

export default connect(mapStateToProps, actions)(LoginForm);
