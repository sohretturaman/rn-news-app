import {Dimensions, StyleSheet, Text, View} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: winHeight,
    width: winWidth,
    position: 'relative',

  },
  opacityContainer: {
    opacity: 0.5,
    backgroundColor: 'black',
    height: winHeight ,
    width: winWidth,
    position: 'absolute',
    
  },
  image: {
    width: winWidth,
    height: winHeight ,
    position: 'absolute',
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  innerContainer:{
    zIndex:1,
    // backgroundColor:'#303030',
    height:winHeight*0.45,
    width:winWidth,
    position:'absolute',
    bottom:0,
   
  },
  desc:{
    color:'white',
    fontSize:winWidth*0.03,
    fontWeight:'bold',
    marginVertical:winWidth*0.02,
    marginHorizontal:winWidth*0.02
  },
  buttonsWrapper:{
    flexDirection:'row',
    marginHorizontal:winWidth*0.02,
    marginVertical:winWidth*0.02
  },
  title:{
    fontSize:winWidth*0.045,
    fontWeight:'bold',
    color:'white',
    paddingHorizontal:winWidth*0.02
  },
  bottomWrapper:{
    paddingBottom:winWidth*0.02
  }
  
});

export default styles;
