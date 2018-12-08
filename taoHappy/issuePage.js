import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
export default class FourthPage extends Component<Props> {
    static navigationOptions = {
        tabBarLabel: '页面4',

    };
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.above}>
                <Text style={styles.aboveText}>
                  发布
                </Text>
              </View>
                <View style={styles.below}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#F5FCFF',
    },
  above: {
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    backgroundColor: '#ffdb45',

  },
  aboveText: {
    color: '#000',
  },
});
