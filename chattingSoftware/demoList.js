/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';

// import ContactData from './ContactData.json';
import jsonData from './sectionData.json';
// let data = ["Amy", "Apple", "Asher", "Black", "Bee", "Brian", "Daniel",
//     "David", "Frank", "Fiona", "Friday", "Jack", "Jason", "Jasper", "Jasmine"];

type Props = {};
export default class demoList extends Component<Props> {

  static navigationOptions = {
    header: null
  };
  navigation=null;
  constructor(props) {
    super(props);
    navigation = this.props.navigation;
    // navigator = this.props.navigator;
    // 2.构件DataSource函数
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    // 3.构造函数：调用cloneWithRows将数据复制到DataSource对象。
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(jsonData),
    }
  }

  componentDidMount() {
    fetch('http://212.64.25.41:8080/listview/sectionData.json')
      .then(response =>  response.json())
      .then(responseData => {
        // alert(JSON.stringify(resp));
        let ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2,
          sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.setState({
          dataSource: ds.cloneWithRowsAndSections(responseData)
        })

      }).catch((error)=>{console.error(error)})

  }

  _renderRow(listData) {
    return (
      <TouchableOpacity onPress ={()=>{ navigation.navigate('Third', {icon: listData.icon,name:listData.name})}}
      >
      <View style={styles.rowItem}>

        <Image style={styles.imageStyle} source={{uri:listData.icon}}>
        </Image>

        <View style={styles.columItem}>
          <Text style={styles.nameStyle}>{listData.name}</Text>
          <Text style={styles.nameStyle}>{listData.type}</Text>

        </View>
      </View>
      </TouchableOpacity>
    )
  }
  _renderHeader(sectionData,sectionId){
    return (
      <View style={styles.sectionHeaderViewStyle}>
        <Text style={styles.IndexStyle}>{sectionId}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderSectionHeader={this._renderHeader}
        />
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
  sortStyle: {
    fontWeight: "bold",
    height: 20,
    width: 20,

  },
  rowItem: {
    width: '80%',
    marginLeft: '10%',
    marginTop: 10,


  },
  imageStyle: {
    borderRadius: 25,
    width: 50,
    height: 50,

  },
  columItem: {
    borderBottomColor: 'blue',
    borderBottomWidth: 0.5,
    width: '80%',
    marginLeft: '16%',
    marginTop: -45,
  },
  nameStyle: {
    marginLeft: '3%'
  },
  sectionHeaderViewStyle: {
    backgroundColor: '#e8e8e8',
    height: 25,
    justifyContent: 'center',
  },
  IndexStyle:{
    width:"80%",
    fontSize:20,
    marginLeft : 10
  }

});
