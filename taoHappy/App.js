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
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';


let Dimensions = require('Dimensions');
let ScreenWidth = Dimensions.get('window').width;//获取屏幕宽度
let ScreenHeight = Dimensions.get('window').height;//获取屏幕高度

import ImageData from "./ImageData.json";//加载图片数据文件
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    }; //当前显示页数
  }
  static defaultProps = {
    duration: 1000, //自动论播间隔
  }

  componentDidMount() { //渲染页面后调用
    this._startTimer();

  }

  componentWillUnmount() { //页面销毁时调用
    // 如果存在this.timer，则使用clearTimeout清空。
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.above}>
          <Text style={styles.aboveText}>
            淘淘乐
          </Text>
          <TextInput style={{ fontSize: 12 ,borderRadius:10,height:30,width: 200,  marginLeft: 10,backgroundColor:'#fff'}} placeholder='请搜索' underlineColorAndroid="transparent">

          </TextInput>
          <TouchableOpacity onPress={() => { dismissKeyboard() }} style={styles.searchView}>
            <Text style={{ color: '#0391ff',marginLeft:20, fontSize: 10 }}>搜索</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.middle}>
          <ScrollView
            ref='scrollView'
            //水平方向
            horizontal={true}
            //当值为true时显示滚动条
            showsHorizontalScrollIndicator={false}
            //当值为true时，滚动条会停在滚动视图的尺寸的整数倍位置。这个可以用在水平分页上
            pagingEnabled={true}
            onMomentumScrollEnd={(e)=>{this._onAnimationEnd(e)}}
            onScrollBeginDrag={()=>{this._onScrollBeginDrag()}}
            onScrollEndDrag={()=>{this._onScrollEndDrag()}}
          >
            {this._renderAllImage()}
          </ScrollView>
          <View style={styles.pageViewStyle}>
            {this._renderAllIndicator()}
          </View>
        </View>

        <View style={styles.below}>
          <View  style={styles.below_everyone}>
          <View style={styles.below_everyoneFirst}>
            <Image source={require('./image/phone.png')} style={{width:40,height:40,marginLeft:27,}} >
            </Image>
            <Text style={styles.belowText}>
              二手手机
            </Text>
          </View>
          <View style={styles.below_everyoneFirst}>
            <Image source={require('./image/car.png')} style={{width:40,height:40,marginLeft:27,}} >
            </Image>
            <Text style={styles.belowText}>
              二手车
            </Text >
          </View>
          <View style={styles.below_everyoneColothes}>
            <Image source={require('./image/clothes.png')} style={{width:40,height:40,marginLeft:27,}} >
            </Image>
            <Text style={styles.belowText}>
              服饰鞋包
            </Text>
          </View>
          <View style={styles.below_everyoneFirstShuma}>
            <Image source={require('./image/carmera.png')} style={{width:40,height:40,marginLeft:27,}} >
            </Image>
            <Text style={styles.belowText}>
              数码
            </Text>
          </View>
          <View style={styles.below_everyoneFirstShuma}>
            <Image source={require('./image/parents.png')} style={{width:40,height:40,marginLeft:27,}} >
            </Image>
            <Text style={styles.belowText}>
              母婴玩具
            </Text>
          </View>
            <View style={styles.below_everyoneJiadian}>
              <Image source={require('./image/sofa.png')} style={{width:40,height:40,marginLeft:27,}} >
              </Image>
              <Text style={styles.belowText}>
                家居家电
              </Text>
            </View>
          </View>
          <View style={styles.below_under}>
            <Text style={{width:ScreenWidth*0.9,marginLeft:'5%',color:'#000'}}>
              卖闲置能换钱   最新发布187677件闲置
            </Text>
          </View>
          <ScrollView >
          <View style={styles.belowUnderView}>
            <View style={styles.belowUnderViewFirst}>
              <Image source={require('./image/dengzi.jpg')} style={{borderRadius:10,width:150,height:100,}}>
              </Image>
              <Text style={{fontWeight:'bold',fontSize:10,color:'#000'}}>
                实木长凳子 全新 原价一百多一张，
              </Text>
              <Text style={{fontSize:12,color:'red'}}>
               ￥38
              </Text>
              <Text style={{marginLeft:100 ,marginTop:-15,fontSize:10,color:'#848484'}}>
                16人想要
              </Text>
            </View>
            <View style={styles.belowUnderViewFirst}>
              <Image source={require('./image/bao.jpg')} style={{borderRadius:10,width:150,height:100,}}>
              </Image>
              <Text style={{fontWeight:'bold',fontSize:10,color:'#000'}}>
                新加坡潮牌单肩包 几乎全新 包邮差
              </Text>
              <Text style={{fontSize:12,color:'red'}}>
                ￥80
              </Text>
              <Text style={{marginLeft:100 ,marginTop:-15,fontSize:10,color:'#848484'}}>
                20人想要
              </Text>
            </View>
            <View style={styles.belowUnderViewFirst}>
              <Image source={require('./image/guang.jpg')} style={{borderRadius:10,width:150,height:100,}}>
              </Image>
              <Text style={{fontWeight:'bold',fontSize:10,color:'#000'}}>
               强光T6手电筒超亮远射可充电迷你多功能
              </Text>
              <Text style={{fontSize:12,color:'red'}}>
                ￥13.8
              </Text>
              <Text style={{marginLeft:100 ,marginTop:-15,fontSize:10,color:'#848484'}}>
                356人想要
              </Text>
            </View>
            <View style={styles.belowUnderViewFirst}>
              <Image source={require('./image/dianshi.jpg')} style={{borderRadius:10,width:150,height:100,}}>
              </Image>
              <Text style={{fontWeight:'bold',fontSize:10,color:'#000'}}>
                小米电视机 全新 智能语音切换频道
              </Text>
              <Text style={{fontSize:12,color:'red'}}>
                ￥300
              </Text>
              <Text style={{marginLeft:100 ,marginTop:-15,fontSize:10,color:'#848484'}}>
                9人想要
              </Text>
            </View>
            <View style={styles.belowUnderViewFirst}>
              <Image source={require('./image/yifu.jpg')} style={{borderRadius:10,width:150,height:100,}}>
              </Image>
              <Text style={{fontWeight:'bold',fontSize:10,color:'#000'}}>
             [现货]CHOKER 兔 jsk尺码：XL,颜色：蓝色
              </Text>
              <Text style={{fontSize:12,color:'red'}}>
                ￥350
              </Text>
              <Text style={{marginLeft:100 ,marginTop:-15,fontSize:10,color:'#848484'}}>
                1人想要
              </Text>
            </View>
          </View>
          </ScrollView>

        </View>


      </View>
    );
  }
  /**开始拖拽 */
  _onScrollBeginDrag(){
    console.log("开始拖拽");
    //清空计时器
    this.timer && clearTimeout(this.timer);
  }
  /**停止拖拽 */
  _onScrollEndDrag(){
    console.log("停止拖拽");
    //开始计时
    this.timer &&this._startTimer();
  }

  /*轮播图片展示 */
  _renderAllImage() {
    let allImage = [];
    let imgsArr = ImageData.data;
    for (let i = 0; i < imgsArr.length; i++) {
      let imgsItem = imgsArr[i];
      allImage.push(
        <Image key={i} source={{uri:imgsItem.icon}} style={styles.imageStyle} />
      );
    }
    return allImage;
  }

  /*手动滑动分页实现 */
  _onAnimationEnd(e) {
    //求出偏移量
    let offsetX = e.nativeEvent.contentOffset.x;
    //求出当前页数
    let pageIndex = Math.floor(offsetX / ScreenWidth);
    //更改状态机
    this.setState({ currentPage: pageIndex });
  }

  /*页面指针实现 */
  _renderAllIndicator() {
    let indicatorArr = [];
    let style;
    let imgsArr = ImageData.data;
    for (let i = 0; i < imgsArr.length; i++) {
      style = (i==this.state.currentPage)?{color:'orange'}:{color:'white'};
      indicatorArr.push(
        <Text key={i} style={[{fontSize:30},style]}>
          &bull;
        </Text>
      );
    }
    return indicatorArr;
  }
  /*通过定时器修改当前界面 */
  _startTimer(){
    let scrollView = this.refs.scrollView; //获取ScrollView的实例
    this.timer = setInterval(
      ()=>{console.log('开启定时器');
        let imageCount = ImageData.data.length; //6
        let activePage = 0; //下一页面初始为0
        if(this.state.currentPage>=imageCount+1){
          activePage = 0; //当前页面超出页面总数时，回到第一页面
        }else{
          activePage = this.state.currentPage+1; //下一页面
        }
        this.setState({currentPage:activePage}); //setState刷新页面
        let offsetX = activePage * ScreenWidth;//设置图片的偏移
        scrollView.scrollResponderScrollTo({x:offsetX,y:0,animated:true});
      },
      this.props.duration
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  above: {
    // flex: 0.5,
    backgroundColor: '#ffdb45',
    height: 45,
    // backgroundColor: "#fff",
    paddingLeft: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },
  aboveText: {
    color: '#000',

  },
  middle: {
    flex: 1.7,
    backgroundColor: 'yellow'

  },
  imageStyle:{
    height:400,
    width:ScreenWidth
  },
  pageViewStyle:{
    height:25,
    width:ScreenWidth,
    backgroundColor:'rgba(0,0,0,0.4)',
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignItems:'center',
  },
  below: {
    backgroundColor:'#f5e8a7',
    width:ScreenWidth,
    flex: 4,

  },
  below_everyone:{
    marginTop:10,
    borderRadius:10,
    marginLeft:'5%',
    width:ScreenWidth*0.9,
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor:'#fff'

  },
  below_everyoneFirst:{
    // backgroundColor:"#fff",
    borderRightColor:'#c4c4c4',
    borderRightWidth:0.5,
    marginTop:5,
    width:100,
    height:60,
    marginLeft:'2%',
    borderBottomWidth:0.5,
    borderBottomColor:'#C4c4c4'

  },
  below_everyoneColothes:{
    marginTop:5,
    width:100,
    height:60,
    marginLeft:'2%',
    borderBottomWidth:0.5,
    borderBottomColor:'#C4c4c4'
  },
  below_everyoneJiadian:{
    marginTop:5,
    width:100,
    height:60,
    marginLeft:'2%',
  },
  below_everyoneFirstShuma:{
    borderRightColor:'#c4c4c4',
    borderRightWidth:0.5,
    marginTop:5,
    width:100,
    height:60,
    marginLeft:'2%',
  },
  belowText:{
    marginLeft:20,
    position:'absolute',
    color:'#848484',
    textAlign:'center',
    lineHeight:110,
  },
  tabBar: {
    fontSize: 20,
    textAlign: 'center',
  },
  belowUnderView:{
    flexDirection:'row',
    flexWrap:'wrap',

    width:ScreenWidth*0.94,
    // backgroundColor:'red',
    marginLeft:'3%',
  },
  belowUnderViewFirst:{
    marginTop:10,
    borderRadius:10,
    marginLeft:13,
    width:150,
    height:150,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#c4c4c4'
  },
});
