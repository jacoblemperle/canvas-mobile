import React, {Component} from 'react'
import {Actions} from 'react-native-router-flux';

import {StyleSheet, Text, View, Dimensions} from 'react-native'


class Course extends Component {

    render() {

        return (
                <View style={styles.courseContainer}>
                    <Text>Hey</Text>
                    <View style={styles.iconContainer}>

                    </View>
                </View>
        )
    }
}
let { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    courseContainer: {
        backgroundColor: 'green',
        flex: 1,
        width: width - 40,
        height: 170,
        borderWidth: 1,
        marginBottom: 20,
        overflow: 'hidden'
    },
    iconContainer: {
        height: 40,
        width,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0
    }
});


export default Course