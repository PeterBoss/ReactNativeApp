import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Button } from 'react-native';

export default class SolutionsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,

        }
    }

    componentDidMount() {
        return fetch('http://10.50.138.26:3000/solutions/user/2')  //change this when server is deployed
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
                <ListView //deprecated, use something else
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <Button //make own button component
                            title={"Assignment #" + rowData.assignment_id + ", Score: " + rowData.rating}
                            onPress={() => alert("For now, this does nothing")}


                        />}
                />
            </View>
        );
    }
}