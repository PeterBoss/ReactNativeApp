import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Button } from 'react-native';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,

        }
    }

    componentDidMount() {
        return fetch('http://192.168.0.9:3000/users/')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
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

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <Button
                            title={rowData.name}
                            onPress={() => alert(`This could navigate to a profile page or something.\nFor now, here's ${rowData.name}'s rating: ` + rowData.rating)}
                            color={(rowData.rating > 8) ? 'goldenrod' : 'midnightblue'}  // Highly rated students in a different color (just for fun)
                            
                        />}
                />
            </View>
        );
    }
}