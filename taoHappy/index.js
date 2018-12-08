import React, {Component} from 'react';

import {AppRegistry,Image} from 'react-native';
import App from './App';
import FirstPage from './homePage'
import SecondPage from './issuePage';
import ThirdPage from './messagePage';
import FourthPage from './personalPage';

import {StackNavigator, TabNavigator} from 'react-navigation';
import demo from './demo';
import Scroll from './Scroll';

const SimpleApp = TabNavigator({
    page1: {
      screen: App,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon:({tintColor})=>(
          <Image
            source={require('./image/index.png')}
            style={{width:20,height:20,resizeMode:'stretch'}}
          />
        ),

      },
    },
      page2: {
        screen: FirstPage,
        navigationOptions: {
          tabBarLabel: '淘圈',
          tabBarIcon:({tintColor})=>(
            <Image
              source={require('./image/friends.png')}
              style={{width:20,height:20,resizeMode:'stretch'}}
            />
          ),
        }
      },
    page3: {
      screen: SecondPage,
      navigationOptions: {
        tabBarLabel: '发布',
        tabBarIcon:({tintColor})=>(
          <Image
            source={require('./image/issue.png')}
            style={{width:20,height:20,resizeMode:'stretch'}}
          />
        ),
      }
    },
    page4: {
      screen: ThirdPage,
      navigationOptions: {
        tabBarLabel: '消息',
        tabBarIcon:({tintColor})=>(
          <Image
            source={require('./image/message.png')}
            style={{width:20,height:20,resizeMode:'stretch'}}
          />
        ),
      }
    },
    page5: {
      screen: FourthPage,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon:({tintColor})=>(
          <Image
            source={require('./image/personal.png')}
            style={{width:20,height:20,resizeMode:'stretch'}}
          />
        ),
      }
    },

  },
  {
    initialRouteName: 'page2',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,

    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor:'black',
      inactiveTintColor:'black',
      style: {
        borderTopColor:'#C4C4C4',
        backgroundColor: '#fff',
        height:60,
      },
      showIcon: true,
    }
  }
);
const simpleApp = StackNavigator({
  Login: {screen: App},
  Second: {screen: FirstPage},
});
//屏蔽黄色警告
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.', 'source.uri should not be an empty string', 'Invalid props.style key'];

console.disableYellowBox = true;// 关闭全部黄色警告

AppRegistry.registerComponent('taoHappy', () => Scroll);
