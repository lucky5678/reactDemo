import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Hello Everyone!</Text>
                <Text style={styles.instructions}>My name is...</Text>
                <Text style={styles.name}>=>zhujun[朱珺]</Text>
                <Text style={styles.instructions}>My major is software engineering.</Text>
                <Text style={styles.secret}> 继续了解，请听下回分解...</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        backgroundColor:'blue',
        color: '#D19275',
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
    name: {
        color: "red"
    },
    instructions: {
        color: '#00009c',
        textAlign: 'center',
        // color: '#333333',
        marginBottom: 5,
    },
    secret: {
        color: '#527F76'
    }
});
