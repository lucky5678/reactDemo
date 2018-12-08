/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Image,
    Text,
    Button,
ScrollView,
} from 'react-native';


type Props = {};

export default class App extends Component<Props> {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
        console.log("构造");
        super(props);
        this.state = {
            chatText: "",
            msg: null,
            color: null,

        }
    }


    sendMsg = () => {
        this.setState(
            {
                msg: <View>
                    {this.state.msg}
                    <View style={styles.box4}>
                        <View style={styles.text_2}>
                            <Text style={styles.text2}>{
                                this.state.chatText}
                            </Text>
                        </View>
                        <Image style={styles.image2}
                               source={require('./image/smile.jpg')}>
                        </Image>
                    </View>
                </View>
            }
        )
    };

    componentWillUnmount(){
        console.log("WillUnMount")
    }
    componentWillMount(){
        console.log("WillMount")
    }
    componentDidMount(){
        console.log("Did")
    }

    render() {
        console.log("render");

        return (

            <View style={styles.container}>
                <View style={styles.above}>
                    <View style={styles.above_box}>
                        <ScrollView style={styles.scrollViewStyle}>
                            <View style={styles.box1}>
                                <Image style={styles.image1}
                                       source={require('./image/smile.jpg')}>
                                </Image>
                                <View style={styles.text_1}>
                                    <Text style={styles.text1}>今天吃什么饭啊？
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.box2}>

                                <View style={styles.text_2}>
                                    <Text style={styles.text2}> 不知道哎...
                                    </Text>
                                </View>
                                <Image style={styles.image2}
                                       source={require('./image/smile.jpg')}>
                                </Image>
                            </View>
                            <View style={styles.box3}>
                                <Image style={styles.image1}
                                       source={require('./image/smile.jpg')}>
                                </Image>
                                <View style={styles.text_1}>
                                    <Text style={styles.text1}>那去餐厅看看
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.box4}>

                                <View style={styles.text_2}>
                                    <Text style={styles.text2}>好，走吧!
                                    </Text>
                                </View>
                                <Image style={styles.image2}
                                       source={require('./image/smile.jpg')}>
                                </Image>
                            </View>
                            <View style={styles.box4}>
                                {
                                    this.state.msg
                                }

                            </View>
                        </ScrollView>

                    </View>

                </View>


                <View style={styles.below}>
                    <View style={styles.below_left}>
                        <TextInput
                            style={styles.below_input}
                            multiline={true} underlineColorAndroid="transparent"
                            onChangeText=
                                {(chatText) => this.setState({chatText})}
                        />

                    </View>
                    <View style={styles.below_right}>
                        <Button onPress={() => {
                            this.sendMsg()
                        }} title="发送" color="#cfcfcf">
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    above: {
        flex: 8.5,
        backgroundColor: 'pink',
    },
    above_box: {
        width: 360,
        flex: 1,
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
    },
    box1: {
        flex: 1,
        borderBottomColor: 'black',

    },
    image1: {
        width: 70,
        height: 70,
        marginTop: 30,
        marginLeft: 20,
        borderRadius: 50,
    },
    text_1: {
        width: 220,
        marginLeft: 110,
        marginTop: -50,
        backgroundColor: 'skyblue',
    },
    text1: {
        marginLeft: 10,
        fontSize: 20,
        color: "black"
    },
    box2: {
        flex: 1,
    },
    text_2: {
        width: 150,
        marginTop: 60,
        marginLeft: 100,
        backgroundColor: 'skyblue',
    },
    text2: {
        marginLeft: 20,
        fontSize: 20,
        color: "black"
    },
    image2: {
        width: 70,
        height: 70,
        marginLeft: 270,
        marginTop: -50,
        borderRadius: 50,
    },
    box3: {
        flex: 1,

    },
    box4: {
        flex: 1,

    },
    below: {
        flex: 1.5,
        backgroundColor: 'skyblue',
    },
    below_left: {},
    below_right: {
        width: 50,
        marginLeft: 298,
        marginTop: -37,


    },
    below_input: {
        marginTop: 25,
        marginLeft: 7,
        width: 280,
        height: 40,
        backgroundColor: "white",

    }
});
