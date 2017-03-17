import React, {Component} from 'react'
import {Actions} from 'react-native-router-flux';

import {StyleSheet, Text, View, TextInput} from 'react-native'


class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>NOOOW Halp</Text>
                <Text>{this.props.userInput}</Text>
                <Text onPress={Actions.mainView}> theis is a button</Text>
                <Text onPress={Actions.settingsView}> theis is a button fur settings</Text>
                <Text onPress={Actions.matchView}> Match View</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 25,
        color: 'green'
    }
});


export default Home