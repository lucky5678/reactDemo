import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,

} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tabBar}>
                    <Image style={styles.imageSty}
                           source={require('./image/left.jpg')}>
                    </Image>
                    <Text style={styles.font}>
                        <Text style={styles.font_1}>
                            帮助中心
                        </Text>
                    </Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.content_1}>
                        <View style={styles.TextQuestionSty}>

                            <Text style={styles.questionStyle}>
                                常见问题
                            </Text>
                        </View>
                        <View style={styles.oftenQuestion}>
                            <Text style={styles.question_1}>
                                <Text style={styles.card_1}> 账号问题</Text>
                            </Text>
                            <Text style={styles.question_1}>
                                购买问题
                            </Text>
                            <Text style={styles.question_1}>
                                页面问题
                            </Text>
                            <Text style={styles.question_1}>
                                操作问题
                            </Text>

                        </View>
                    </View>
                    <View style={styles.content_2}>
                        <View style={styles.useQuestionSty}>
                            <Text style={styles.useStyle}>
                                使用技巧
                            </Text>
                        </View>
                        <View style={styles.useTechnical}>
                            <Text style={styles.question_1}>
                                视图操作
                            </Text>
                            <Text style={styles.question_1}>
                                结构查看
                            </Text>
                            <Text style={styles.question_1}>
                                书签使用
                            </Text>
                            <Text style={styles.question_1}>
                                鼠标模式
                            </Text>
                            <Text style={styles.question_1}>
                                微课课程
                            </Text>
                            <Text style={styles.question_1}>
                                测验练习
                            </Text>

                        </View>
                    </View>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        backgroundColor: '#077BDE',
        height: 70,

    },
    imageSty: {
        position: 'absolute',
        marginLeft: 25,
        marginTop: 35,
        width: 20,
        height: 20,

    },

    font: {
        marginTop: 33,
        fontSize: 20,

        textAlign: 'center',
    },
    font_1: {
        color: 'white'
    },
    content: {
        flex: 1,
        width: 320,
        height: 830,
        marginLeft: 30,
    },
    content_1: {
        flex: 1.8,
    },
    content_2: {
        flex: 8.2,
    },
    TextQuestionSty: {
        width: 320,
        height: 40,
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 2,

    },
    questionStyle: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: "bold"
    },
    question_1: {
        marginTop: 15,
        textAlign: 'center',
        width: 75,
        height: 25,
        borderWidth: 2,
        borderColor: '#E5E5E5',
        borderRadius: 50,

    },
    useStyle: {
        marginTop:5,
        fontSize: 18,
        fontWeight: "bold"
    },
    oftenQuestion: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    useQuestionSty: {

        width: 420,
        height: 40,
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 2,
    },

    useTechnical: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        // alignContent:'center'

    },


});


