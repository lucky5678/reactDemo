/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            inputUserName: '',
            inputPwd: '',
        }
    }

    updateUser(inputText) {
        this.setState((state) => {
            return {
                inputUserName: inputText,
            }
        });
    }
    onPress(){
        console.log("点击按钮:"+this.state.inputUserName);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.above}>
                    <View style={styles.above_user}>
                        <Text style={styles.user}>登录账户</Text>
                    </View>
                    <View style={styles.above_right}>
                        <Text style={styles.del}>取消</Text>
                    </View>

                </View>

                <View style={styles.middle}>
                    <View style={styles.input}>
                        <TextInput style={styles.userName} placeholder={"QQ号/手机号/邮箱"}
                                   onChangeText={(inputText) => this.updateUser(inputText)}>
                        </TextInput>
                        <TextInput style={styles.userPwd} placeholder={"密码"}>
                        </TextInput>
                        <Text style={styles.instructions}>
                            您输入的用户名是:{this.state.inputUserName}
                        </Text>
                    </View>

                    <View style={styles.button}>
                        <Button
                            onPress={this.onPress.bind(this)}
                            title={"登录"} color="#1EB9F2"/>
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
        alignItems: 'center',


    },
    above: {
        width: 360,
        height: 50,
        backgroundColor: '#FA698E',
        flexDirection:"row"


    },
    user: {
        marginLeft:130,
        alignItems: "center",
        color: 'white',
        fontSize: 20,
    },
    above_user: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    middle: {
        width: 360,
        height: 600,
        backgroundColor: '#F5F5F5',
    },
    above_right: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    del: {
        marginLeft:110,
        color: 'white',
        fontSize: 20,
    },
    input: {
        width: 360,
        height: 150,
        marginTop: 20,
        backgroundColor: 'white',
    },
    userName: {
        width: 330,
        fontSize: 20,
        marginLeft: 10,
        textAlign: 'left',
    },
    userPwd: {
        width: 330,
        marginLeft: 10,
        fontSize: 20,
        textAlign: 'left',
    },
    instructions: {
        fontSize: 20,
        width: 360,
        marginTop: 8,
        marginLeft: 13,
        textAlign: 'left',

    },
    button: {

        marginTop: 20,
        width: 300,

        marginLeft: 30,
    }

});
