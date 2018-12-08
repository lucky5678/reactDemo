import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

let Dimensions = require('Dimensions');
let ScreenWidth = Dimensions.get('window').width;//获取屏幕宽度
let ScreenHeight = Dimensions.get('window').height;//获取屏幕高度
export default class FourthPage extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.above}>
          <Text style={styles.aboveText}>
            消息
          </Text>
        </View>
        <View style={styles.below}>
          <View style={styles.belowView}>
            <View style={{flex: 1.5, justifyContent:'center',alignItems:'center'}}>
              <Image source={require('./image/touxiang.jpg')} style={{width:ScreenWidth*0.14,height:50}}>
              </Image>
            </View>
            <View style={{ justifyContent:'center', borderBottomWidth:1, borderBottomColor:'#f4f4f4',flex: 4,}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}>
                pjsht
              </Text>
              <Text style={{fontSize:14}}>
                提示你回复消息
              </Text>
              <Text style={{fontSize:10,marginTop:10,}}>
                1个月前
              </Text>

            </View>
            <View style={{ justifyContent:'center', borderBottomWidth:1, borderBottomColor:'#f4f4f4',flex: 1.5,}}>

            <Image source={require('./image/jianpan.jpg')} style={{width:ScreenWidth*0.16,height:60}}>
            </Image>
            </View>
          </View>
          <View style={styles.belowView}>
            <View style={{flex: 1.1, justifyContent:'center',alignItems:'center'}}>
              <Image source={require('./image/tongzhi.png')} style={{width:ScreenWidth*0.14,height:50}}>
              </Image>
            </View>
            <View style={{ justifyContent:'center', borderBottomWidth:1, borderBottomColor:'#f4f4f4',flex: 4,}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}>
                通知
              </Text>
              <Text style={{fontSize:14}}>
                一步完成实人认证，卖闲置很简单
              </Text>
              <Text style={{fontSize:10,marginTop:10,}}>
                1个月前
              </Text>

            </View>
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
  below: {
    flex: 9,
  },
  belowView: {
    height: ScreenHeight * 0.12,
    flexDirection: 'row',

  },

});
