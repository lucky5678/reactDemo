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
                        <Text style={styles.font_title}>
                            帮助中心
                        </Text>
                    </Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.content_above}>
                        <View style={styles.TextAndUseQuestionSty}>
                            <Text style={styles.questionAndUseStyle}>
                                常见问题
                            </Text>
                        </View>
                        <View style={styles.oftenQuestion}>
                            <View style={styles.question_kinds}>
                                <Text style={styles.question_kinds_text}>
                                    账号问题
                                </Text>
                            </View>
                            <View style={styles.question_kinds}>
                                <Text style={styles.question_kinds_text}>
                                    购买问题
                                </Text>
                            </View>
                            <View style={styles.question_kinds}>
                                <Text style={styles.question_kinds_text}>
                                    页面问题
                                </Text>
                            </View>
                            <View style={styles.question_kinds}>
                                <Text style={styles.question_kinds_text}>
                                    操作问题
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content_below}>
                        <View style={styles.TextAndUseQuestionSty}>
                            <Text style={styles.questionAndUseStyle}>
                                使用技巧
                            </Text>
                        </View>
                        <View style={styles.useTechnical}>
                            <View style={styles.question_kinds}>
                                <Text style={styles.question_kinds_text}>
                                    视图操作
                                </Text>
                            </View>
                            <View style={styles.question_kinds}>
                                <Text style={styles.question_kinds_text}>
                                    结构查看
                                </Text>
                            </View>
                            <View style={styles.question_kinds}>
                                <Text style={styles.question_kinds_text}>
                                    书签使用
                                </Text>
                            </View>
                            <View style={styles.question_kinds}>
                                <Text style={styles.question_kinds_text}>
                                    鼠标模式
                                </Text>
                            </View>
                            <View style={styles.question_kinds}>
                                <Text style={styles.question_kinds_text}>
                                    微课课程
                                </Text>
                            </View>
                            <View style={styles.question_kinds}>
                                <Text style={styles.question_kinds_text}>
                                    测验练习
                                </Text>
                            </View>
                            <Text style={styles.question_noUse}>
                                测验练习
                            </Text>
                            <Text style={styles.question_noUse}>
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
        height: 64,
    },
    imageSty: {
        position: 'absolute',
        marginLeft: 10,
        marginTop: 35,
        width: 20,
        height: 20,
    },
    font: {
        marginTop: 29,
        fontSize: 20,
        textAlign: 'center',
    },
    font_title: {
        color: 'white'
    },
    content: {
        flex: 1,
        width: '100%',
        height: 'auto',
    },
    content_above: {
        flex: 1.67,
    },
    content_below: {
        flex: 8.33,
    },
    TextAndUseQuestionSty: {
        width: '90%',
        height: 52,
        marginLeft: '5%',
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1,
    },
    questionAndUseStyle: {
        marginTop: 24,
        fontSize: 13,
        fontWeight: "bold"
    },
    question_kinds: {
        marginTop: 13,
        width: 76,
        height: 26,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 50,
    },
    question_kinds_text: {
        fontSize: 11,
        textAlign: 'center',
        lineHeight: 25,
    },
    //占位的样式
    question_noUse: {
        marginTop: 15,
        textAlign: 'center',
        width: 75,
        height: 0,
        lineHeight: 25,
        borderWidth: 0,
        borderRadius: 50,
    },
    oftenQuestion: {
        width: '90%',
        marginLeft: '5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    useTechnical: {
        width: '90%',
        marginLeft: '5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
});


