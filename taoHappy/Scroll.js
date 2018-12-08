import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';

const { height, width } = Dimensions.get('window');
import EZSwiper from 'react-native-ezswiper';

const images = [require(`./image/message.png`),require(`./image/index.png`),require(`./image/taoquan43.jpg`),require(`./image/index.png`),require(`./image/taoquan43.jpg`),require(`./image/message.png`),require(`./image/taoquan41.jpg`),require(`./image/taoquan33.jpg`),require(`./image/taoquan31.jpg`)]

export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
    };
  }

  onPressRow(obj, index) {
    console.log('onPressRow=>obj:'+ obj + ' ,index:' + index);
    alert('onPressRow=>obj:'+ obj + ' ,index:' + index);
  }

  renderImageRow(obj, index) {
    return (
      <View style={[styles.cell,{backgroundColor: 'gray',overflow:'hidden'}]}>
        <Image
          style={{position:'absolute',top:0,right:0,bottom:0,left:0,width: undefined, height: undefined}}
          resizeMode={'contain'}
          source={obj}/>
      </View>
    )
  }
  /*页面指针实现 */
  _renderAllIndicator() {
    let indicatorArr = [];
    let style;
    for (let i = 0; i < images.length; i++) {
      // alert(images.length);
      style = (i===this.state.currentPage)?{color:'orange'}:{color:'white'};
      indicatorArr.push(
        <Text key={i} style={[{fontSize:30},style]}>
          &bull;
        </Text>
      );
    }
    return indicatorArr;
  }
  render() {
    return (
      <View style={styles.above}>

      <ScrollView style={[styles.container]} contentInsetAdjustmentBehavior="automatic">
        <EZSwiper style={[styles.swiper,{width: width,height: 150 ,}]}
                  dataSource={images}
                  width={ width }
                  height={150 }
                  renderRow={this.renderImageRow}
                  onPress={this.onPressRow}
                  ratio={0.6}
        />
      </ScrollView>
        <View style={styles.pageViewStyle}>
          {this._renderAllIndicator()}
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  swiper: {
    backgroundColor: 'white',
  },
  above: {
    height: 155,
  },
  cell: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageControl: {
    position: 'absolute',
    bottom: 4,
    right: 10,
  },
  pageViewStyle:{
    height:25,
    width:width,
    backgroundColor:'rgba(0,0,0,0.4)',
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
});