import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Button } from 'react-native';

export default class UserView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,

    }
  }

  componentDidMount() {
    return fetch('http://10.50.138.26:3000/users/2')  //change this when server is deployed
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    let user = this.state.dataSource;
    
    return (
      //hardcoded for demo-purpose
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Text>Holly Tredger</Text>
        <Text>rating: 8.3</Text>
      </View>
    );
  }
}