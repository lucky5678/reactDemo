import React, {Component} from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {StackNavigator,TabNavigator} from 'react-navigation';
import issuePage from 'issuePage';
import messagePage from 'messagePage';
import personalPage from 'personalPage';
import homePage from 'homePage';

const SimpleApp = TabNavigator({
    page1: {
      screen: homePage,
      navigationOptions: {
        tabBarLabel: '首页',
      }
    },
    page2: {
      screen: issuePage,
      navigationOptions: {
        tabBarLabel: '淘乐',
      }
    },
    page3: {
      screen: App,
      navigationOptions: {
        tabBarLabel: '发布',
      }
    },
    page4: {
      screen: messagePage,
      navigationOptions: {
        tabBarLabel: '消息',
      }
    },
    page5: {
      screen: personalPage,
      navigationOptions: {
        tabBarLabel: '我的',
      }
    },

  },
  {
    initialRouteName: 'page1',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: 'skyblue'
      },
      showIcon: true,
    }
  });
const simple = StackNavigator({
  login:{screen:App}

});
//屏蔽黄色警告
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.', 'source.uri should not be an empty string', 'Invalid props.style key'];

console.disableYellowBox = true;// 关闭全部黄色警告
AppRegistry.registerComponent('taoTao', () => simple);
