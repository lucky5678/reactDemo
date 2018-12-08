import React from 'react';
import { AppRegistry,Image } from 'react-native';

// import FirstPage from './FirstPage';
// import Second_Page from './Second_Page';
// import ThirdPage from './ThirdPage';
// import FourthPage from './FourthPage';
import demoWeb from './demoWeb';
import {StackNavigator, TabNavigator} from 'react-navigation';
import App from './App';
import Friends from  './Friends';
import demoList from './demoList';

import thirdPage from './ContactDetail';
import demoLogin from './demoLogin';
import login from './login';
import secondPage from './secondPage';


const SimpleAppNavigator = TabNavigator({

    page1: {
      screen: App,
      navigationOptions:{
        tabBarLabel:'首页',
        tabBarIcon:({tintColor})=>(
          <Image
            source={require('./image/sun.png')}
            style={{width:20,height:20,resizeMode:'stretch'}}
          />
        )
      }
    },
    page2: {
      screen: demoList,
      navigationOptions:{
        tabBarLabel:'联系人',
        tabBarIcon:({tintColor})=>(
          <Image
            source={require('./image/cloudy.png')}
            style={{width:20,height:20,resizeMode:'stretch'}}
          />)
      }
    },
    page3: {
      screen: Friends,
      navigationOptions: {
        tabBarLabel: '朋友圈',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('./image/sad.png')}
            style={{width: 20, height: 20, resizeMode: 'stretch'}}
          />)
      }
    },
    // page4: {screen: FourthPage}
  },
  {
    initialRouteName: 'page1',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,
    tabBarPosition:'bottom',
    tabBarOptions:{
      style:{
        backgroundColor:'skyblue'
      },
      showIcon:true,
    }
  });
const simpleApp = StackNavigator({
  Login:{screen:login},
  Second:{screen: SimpleAppNavigator},
  Third:{screen:thirdPage},
});
//屏蔽黄色警告
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];

console.disableYellowBox = true;// 关闭全部黄色警告

// AppRegistry.registerComponent('chattingSoftware', () => SimpleAppNavigator);
AppRegistry.registerComponent('chattingSoftware', () => demoWeb);
