import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import Users from './Users'


export default class UserView extends Component {
  constructor(props) {
    super(props);
    this.state = {id: '0'};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter a student ID"
          onChangeText={(id) => this.setState({id})}
          
        />
        
      </View>
    );
  }
}