import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import SolutionsView from './views/SolutionsView'
import UserView from './views/UserView'
import AssignmentsView from './views/AssignmentsView'

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)


class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Home' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Touchable onPress={() => navigate('SolutionsView')} title="User's solved assignments" />
        <Touchable onPress={() => navigate('UserView')} title="User's information" />
        <Touchable onPress={() => navigate('AssignmentsView')} title="Appropriate Assignments" />

      </View>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  SolutionsView: { screen: SolutionsView },
  UserView: { screen: UserView },
  AssignmentsView: { screen: AssignmentsView },


});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})