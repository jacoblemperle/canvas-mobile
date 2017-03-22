import React, {Component} from 'react'
import {Actions} from 'react-native-router-flux';

import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native'

import Course from './Course';


class Home extends Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Course courseTitle="This is the course title"/>
                    <Course courseTitle="This is the course title"/>
                    <Course courseTitle="This is the course title"/>
                    <Course courseTitle="This is the course title"/>
                    <Course courseTitle="This is the course title"/>
                    <Course courseTitle="This is the course title"/>
                    <Course courseTitle="This is the course title"/>
                    <Course courseTitle="This is the course title"/>
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
        marginBottom: 35
    },
    header: {
        fontSize: 25,
        color: 'green'
    }
});


export default Home