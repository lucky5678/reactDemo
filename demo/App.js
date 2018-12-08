/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View,Image,} from 'react-native';


type
Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.itemContain}>
                    <View style={styles.boxBlue}>
                        <Image style={styles.imageStyle}
                            source ={require('./image/1.jpg')}>

                        </Image>

                    </View>
                    <View style={styles.boxYellow}>
                        <Image style={styles.imageStyle}
                               source ={require('./image/2.jpg')}>

                        </Image>
                    </View>
                    <View style={styles.boxBlue}>
                        <Image style={styles.imageStyle}
                               source ={require('./image/3.jpg')}>

                        </Image>
                    </View>
                </View>
                <View style={styles.itemContain}>
                    <View style={styles.boxYellow}>
                        <Image style={styles.imageStyle}
                               source ={require('./image/4.jpg')}>

                        </Image>
                    </View>
                    <View style={styles.boxBlue}>
                        <Image style={styles.imageStyle}
                               source ={require('./image/5.jpg')}>

                        </Image>
                    </View>
                    <View style={styles.boxYellow}>
                        <Image style={styles.imageStyle}
                               source ={require('./image/6.jpg')}>

                        </Image>
                    </View>
                </View>
                <View style={styles.itemContain}>
                    <View style={styles.boxBlue}>
                        <Image style={styles.imageStyle}
                               source ={require('./image/7.jpg')}>

                        </Image>
                    </View>
                    <View style={styles.boxYellow}>
                        <Image style={styles.imageStyle}
                               source ={require('./image/8.jpg')}>

                        </Image>
                    </View>
                    <View style={styles.boxBlue}>
                        <Image style={styles.imageStyle}
                               source ={require('./image/9.jpg')}>

                        </Image>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#ccc'
    },
    itemContain: {
        flex: 1,
        flexDirection: 'row',
        margin:1
    },
    boxBlue: {
        flex: 1,
        backgroundColor: 'black',


    },
    boxYellow: {
        flex: 1,
        backgroundColor: 'white',

    },
    imageStyle:{
        flex:1,
        width:150,
        height:150,
    }
});
7