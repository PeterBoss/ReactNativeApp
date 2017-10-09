import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Users from './Users'
/*
async function getUsersFromApi() {
  try {
    let response = await fetch('http://192.168.0.9:3000/users/');
    let responseJson = await response.json();
    return responseJson;
  } catch(error) {
    console.error(error)
  }
}
*/
export default class App extends React.Component {
  render() {
    return (

      <Users id='range/0/3' />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
