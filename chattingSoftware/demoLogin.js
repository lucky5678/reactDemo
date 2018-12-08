/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {StackNavigator} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const userName = 'lwl';
const PWD = '123';

export default class demoLogin extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputedNum:'',
      inputedPW:null, 
    }
  }

  static navigationOptions = ({navigation}) => ({
    headerTitle: `欢迎登录`,

  });
  
  updateNum(newText) {
    this.setState({
        inputedName:newText,
      });
  }

  updatePwd(newText) {
    this.setState({
        inputedPW:newText,
    });
  }

  // onPress(){
  //   console.log("inputedPW:"+this.state.inputedPW);
  //   console.log("inputedName:"+this.state.inputedName);
  //   this.props.navigation.navigate('Second',{user: this.state.inputedName,pwd:this.state.inputedPW});
  // }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style = {styles.textInputStyle} 
          placeholder={'请输入用户名'}
          onChangeText = {(newText)=>this.updateNum(newText)}>
        </TextInput>

        <Text style = {styles.textDisplayStyle}>
        您输入的用户名是：{this.state.inputedName}
        </Text>

        <TextInput style={styles.textInputStyle}
          placeholder={'请输入密码'}
          secureTextEntry ={true}
          onChangeText = {(newText)=>this.updatePwd(newText)}>
        </TextInput>

        <TouchableOpacity onPress ={
          ()=>{
            this.props.navigation.navigate('Second')
            // {user: this.state.inputedName,pwd:this.state.inputedPW})
          }
        }>
          <Text style = {styles.buttonStyle}>
          确定
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInputStyle:{
    backgroundColor:'#c0d9d9',
    fontSize:15,
    margin:20,
    borderRadius:10,
  },
  textDisplayStyle:{
    fontSize:15,
    margin:20,
  },
  buttonStyle:{
    backgroundColor:'#c0d9d9',
    color:'black',
    textAlign:'center',
    fontSize:20,
    margin:20,
  }
});
