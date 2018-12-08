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
    AsyncStorage,
} from 'react-native';


type Props = {};
export default class storageDemo extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            insertKey: "",//用于保存用户输入要插入的key
            insertValue: "", //用于保存用户输入要插入的value
            queryKey: "",//用于保存用户输入的要查询的key
            queryValue: "",//用于根据queryKey，查询到的持久化value值
        }
    }

    /*举例如何更新一个state值、其余的请自行实现*/
    updateInsertKey(input) {
        console.log("updateInsertKey:" + input);
        this.setState({
            insertKey: input
        })
    }

    clearScreen() {
        this.setState({
            insertKey: "",
            insertValue: "",
            queryKey: "",
            queryValue: ""
        });
    }

    save() {
        let that = this;
        //此时的insertKey，insertValue为输入获取的已改变的值。
        AsyncStorage.setItem(that.state.insertKey, that.state.insertValue, function (errs) {
            if (errs) {
                return;
            }
            alert("添加成功！")
        })
    }

    query() {
        let _that = this;
        //此时的queryKey为获取用户要查询的key值，并更新state中的queryKey
        AsyncStorage.getItem(_that.state.queryKey, function (errs, result) {
            if (errs) {
                return;
            }
            alert("查询成功" + result);
            _that.setState({
                queryValue: result === null ? "数据已经删除，现在取得是空值" : result
            });
        });
    }

    clear() {
        let _that = this;
        AsyncStorage.clear(function (errs) {
            if (!errs) {
                _that.setState({
                    insertKey: '',
                    insertValue: '',
                });
                alert('添加的数据已清除完毕！')
            }
        })
    }

    remove() {

        AsyncStorage.removeItem(this.state.insertKey, function (errs) {
            if (errs) {
                return;
            }
            alert("删除成功！")
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.up}>
                    <View style={styles.horizonItem}>
                        <Text style={styles.textStyle}>
                            key:
                        </Text>
                        <TextInput style={styles.inputStyle}
                                   onChangeText={(key) => {
                                       alert("获取用户输入的key值，并更新state中的insertKey");
                                       this.setState({
                                           insertKey:key
                                       })
                                   }}>
                        </TextInput>
                    </View>
                    <View style={styles.horizonItem}>
                        <Text style={styles.textStyle}>
                            value:
                        </Text>
                        <TextInput style={styles.inputStyle}
                                   onChangeText={(value) => {
                                       alert("获取用户输入的value值，并更新state中的insertValue");
                                       this.setState({
                                           insertValue:value
                                       })
                                   }}>
                        </TextInput>
                    </View>
                    <Text style={styles.buttonStyle}
                          onPress={this.save.bind(this)}>
                        添加
                    </Text>
                </View>

                <View style={styles.down}>
                    <View style={styles.horizonItem}>
                        <Text style={styles.textStyle}>
                            key:
                        </Text>
                        <TextInput style={styles.inputStyle}
                                   onChangeText={(text) => {
                                       alert("获取用户要查询的key值，并更新state中的queryKey");
                                       this.setState({
                                           queryKey: text
                                       })
                                   }}>
                        </TextInput>
                    </View>

                    <View style={styles.horizonItem}>
                        <Text style={styles.textStyle}>
                            value:
                        </Text>
                        <Text style={styles.inputStyle}>
                            {this.state.queryValue}
                        </Text>
                    </View>

                    <View style={styles.buttonSet}>
                        <Text style={styles.buttonStyle}
                              onPress={
                                  this.query.bind(this)
                              }>
                            查询
                        </Text>
                        <Text style={styles.buttonStyle}
                              onPress={this.clearScreen.bind(this)}>
                            清空value
                        </Text>
                    </View>

                    <View style={styles.buttonSet}>
                        <Text style={styles.buttonStyle}
                              onPress={
                                  this.remove.bind(this)
                              }>
                            删除
                        </Text>
                        <Text style={styles.buttonStyle}
                              onPress={
                                  this.clear.bind(this)
                              }>
                            清空数据
                        </Text>
                    </View>
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
    up: {
        flex: 1,
        backgroundColor: "#E6E6FA",
    },
    down: {
        flex: 1,
        backgroundColor: "#B0C4DE",
    },

    horizonItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor:'skyblue',
    },

    inputStyle: {
        flex: 1,
        marginRight: 10,
        color: 'white',
        fontSize: 30,
    },
    textStyle: {
        backgroundColor: 'gray',
        color: '#fff',
        fontSize: 20,
        margin: 5,
        padding: 5,
    },

    textvalueStyle: {
        flex: 1,
        marginRight: 10,
        color: 'white',
        fontSize: 30,
        backgroundColor: 'gray',
        textDecorationLine: "underline",
    },
    buttonStyle: {
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        margin: 20,
    },

    buttonSet: {
        flexDirection: 'row',
        flexWrap: 'nowrap'
    }
});
