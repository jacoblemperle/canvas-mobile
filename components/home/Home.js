import React, {Component} from 'react'
import {Actions} from 'react-native-router-flux';

import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native'

import Course from './Course';


class Home extends Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 25,
        color: 'green'
    }
});


export default Home