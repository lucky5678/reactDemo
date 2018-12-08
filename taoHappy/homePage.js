import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import MessageData from "./MessageData.json";  //加载数据文件
import ImageData from "./BadgeData.json"; //加载json文件
let Dimensions = require('Dimensions');
let ScreenWidth = Dimensions.get('window').width;//获取屏幕宽度
let ScreenHeight = Dimensions.get('window').height;//获取屏幕高度

export default class FirstPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.above}>
          <Text style={styles.aboveText}>
            淘淘圈
          </Text>
        </View>
        <View style={styles.middle}>
          <Text style={styles.middleText}>
            -
            <Image source={require('./image/dongtai.png')} style={{width: 40, height: 40}}></Image>淘圈动态-
          </Text>
        </View>

        <View style={styles.below}>
          <ScrollView style={{height: ScreenHeight}}>
            <View style={styles.belowView}>
              <Image source={require('./image/taotouxiang1.jpg')} style={{width: 50, height: 50}}>
              </Image>
              <Text style={{marginLeft: 50, marginTop: -40,}}>
                zhangcc8888
              </Text>
              <Text style={{
                marginLeft: 140,
                marginTop: -15,
                backgroundColor: '#F5FCFF',
                width: 20,
                fontSize: 10,
                color: '#0049e1'
              }}>
                淘主
              </Text>
              <Text style={{marginLeft: 50, color: '#000'}}>
                我在鱼塘上新了宝贝
              </Text>
              <View style={styles.belowImageView}>
                <Image source={require('./image/taoquan21.jpg')} style={{marginLeft: 25, width: 80, height: 80}}>
                </Image>
                <Image source={require('./image/taoquan22.jpg')} style={{marginLeft: 25, width: 80, height: 80}}>
                </Image>
                <Image source={require('./image/taoquan23.jpg')} style={{marginLeft: 25, width: 80, height: 80}}>
                </Image>
              </View>
              <Text style={styles}>
                来自 iPhone果粉专区(283人)
              </Text>
            </View>
            <View style={styles.belowView}>
              <Image source={require('./image/taotouxiang2.jpg')} style={{width: 50, height: 50}}>
              </Image>
              <Text style={{marginLeft: 50, marginTop: -40,}}>
                Itzhuyuhui
              </Text>
              <Text style={{
                marginLeft: 140,
                marginTop: -15,
                backgroundColor: '#F5FCFF',
                width: 20,
                fontSize: 10,
                color: '#0049e1'
              }}>
                淘主
              </Text>
              <Text style={{marginLeft: 50, color: '#000'}}>
                我在鱼塘上新了宝贝
              </Text>
              <View style={styles.belowImageView}>
                <Image source={require('./image/taoquan11.jpg')} style={{marginLeft: 25, width: 80, height: 80}}>
                </Image>
                <Image source={require('./image/taoquan12.jpg')} style={{marginLeft: 25, width: 80, height: 80}}>
                </Image>
                <Image source={require('./image/taoquan13.jpg')} style={{marginLeft: 25, width: 80, height: 80}}>
                </Image>
              </View>
              <Text style={styles}>
                来自 超高跟大码女鞋(130人)
              </Text>
            </View>
            <View style={styles.belowView}>
              <Image source={require('./image/taotouxiang3.jpg')} style={{width: 50, height: 50}}>
              </Image>
              <Text style={{marginLeft: 50, marginTop: -40,}}>
                申楚彤
              </Text>
              <Text style={{
                marginLeft: 140,
                marginTop: -15,
                backgroundColor: '#F5FCFF',
                width: 20,
                fontSize: 10,
                color: '#0049e1'
              }}>
                淘主
              </Text>
              <Text style={{marginLeft: 50, color: '#000'}}>
                我在鱼塘上新了宝贝
              </Text>
              <View style={styles.belowImageView}>
                <Image source={require('./image/taoquan31.jpg')} style={{marginLeft: 25, width: 80, height: 80}}>
                </Image>
                <Image source={require('./image/taoquan32.jpg')} style={{marginLeft: 25, width: 80, height: 80}}>
                </Image>
                <Image source={require('./image/taoquan33.jpg')} style={{marginLeft: 25, width: 80, height: 80}}>
                </Image>
              </View>
              <Text style={styles}>
                来自 西安租房一族(500人)
              </Text>
            </View>
            <View style={styles.belowView}>
              <Image source={require('./image/taotouxiang4.jpg')} style={{width: 50, height: 50}}>
              </Image>
              <Text style={{marginLeft: 50, marginTop: -40,}}>
                憨厚大驴驴
              </Text>
              <Text style={{
                marginLeft: 140,
                marginTop: -15,
                backgroundColor: '#F5FCFF',
                width: 20,
                fontSize: 10,
                color: '#0049e1'
              }}>
                淘主
              </Text>
              <Text style={{marginLeft: 50, color: '#000'}}>
                我在鱼塘上新了宝贝
              </Text>
              <View style={styles.belowImageView}>
                <Image source={require('./image/taoquan41.jpg')} style={{marginLeft: 25, width: 80, height: 80}}>
                </Image>
                <Image source={require('./image/taoquan42.jpg')} style={{marginLeft: 25, width: 80, height: 80}}>
                </Image>
                <Image source={require('./image/taoquan43.jpg')} style={{marginLeft: 25, width: 80, height: 80}}>
                </Image>
              </View>
              <Text style={styles}>
                来自 韩货女装尾货处理(113人)
              </Text>
            </View>
          </ScrollView>
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
    backgroundColor: '#fff',

  },
  aboveText: {
    color: '#000',
  },
  middle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 20,


  },
  middleText: {
    fontSize: 11,

  },
  below: {
    flex: 9,
    // backgroundColor:'yellow',

  },
  belowView: {
    marginTop: 10,
    marginLeft: '3%',
    height: 170,
    width: ScreenWidth * 0.94,
    backgroundColor: '#fff',
  },
  belowImageView: {
    marginTop:10,
    width: ScreenWidth * 0.94,
    height: 100,
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
