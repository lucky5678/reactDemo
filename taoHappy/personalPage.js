import React, {Component} from 'react';
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
          <View style={styles.aboveFirst}>
            <Text style={styles.aboveText_first}>
              个人中心
            </Text>
          </View>
          <Image source={require('./image/touxiang.jpg')}
                 style={{marginLeft: 20, marginTop: 2, width: 50, height: 50,}}>
          </Image>
          <View style={styles.aboveText}>
            <Text style={{color: '#000', fontWeight: 'bold'}}>
              LUCKY GIRL
            </Text>
          </View>
          <View style={styles.belowView}>
            <Text>
              虽然没有赚到钱，但在淘乐开心就好。
            </Text>
          </View>

        </View>
        <View style={styles.below}>
          <View style={styles.belowText}>
            <Image source={require('./image/issue.png')} style={styles.belowImage}>
            </Image>
            <Text style={{position: 'absolute', marginLeft: 50,}}>
              我发布的
            </Text>
          </View>
          <View style={styles.belowText}>
            <Image source={require('./image/maichu.png')} style={styles.belowImage}>
            </Image>
            <Text style={{position: 'absolute', marginLeft: 50,}}>
              我卖出的
            </Text>
          </View>
          <View style={styles.belowText}>
            <Image source={require('./image/maidao.png')} style={styles.belowImage}>
            </Image>
            <Text style={{position: 'absolute', marginLeft: 50,}}>
              我买到的
            </Text>
          </View>
          <View style={styles.belowText}>
            <Image source={require('./image/zu.png')} style={styles.belowImage}>
            </Image>
            <Text style={{position: 'absolute', marginLeft: 50,}}>
              我租到的
            </Text>
          </View>
          <View style={styles.belowText}>
            <Image source={require('./image/mian.png')} style={styles.belowImage}>
            </Image>
            <Text style={{position: 'absolute', marginLeft: 50,}}>
              我参与的免费送
            </Text>
          </View>
          <View style={styles.belowText}>
            <Image source={require('./image/shezhi.png')} style={styles.belowImage}>
            </Image>
            <Text style={{position: 'absolute', marginLeft: 50,}}>
              设置
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
  above: {
    height: 100,
    borderBottomWidth: 0.5,
    borderBottomColor: '#c4c4c4',
  },
  aboveFirst:{
    backgroundColor: '#ffdb45',
    height: 45,
    paddingLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  aboveText: {
    marginTop: -50,
    width: '60%',
    marginLeft: 80,
    height: 30,
  },
  aboveText_first: {
    color: '#000',
  },
  below: {
    flex: 9,
  },
  belowText: {
    height: 50,
    // backgroundColor:'red',
    justifyContent: 'center',
    width: '90%',
    marginLeft: '5%',
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 0.5

  },
  belowImage: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  belowView: {
    width: '80%',
    marginLeft: 80,
    height: 30,

  },
});
