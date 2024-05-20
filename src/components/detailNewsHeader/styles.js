import {Dimensions, StyleSheet, Text, View} from 'react-native';
const winWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: winWidth * 0.02,
    alignItems: 'center',
    marginVertical: winWidth * 0.02,
   
    height: winWidth * 0.15,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  image: {
    width: winWidth * 0.12,
    height: winWidth * 0.12,
    borderRadius: winWidth * 0.15,
  },
  innerContainer:{
     flexDirection:'row',
     width:winWidth*0.85,
     height:winWidth*0.12,
     alignItems:'center',
     justifyContent:'space-between',
     paddingHorizontal:winWidth*0.02,
     paddingVertical: winWidth*0.02
  },
  textWrapper:{
    justifyContent:'space-between',
    height:winWidth*0.1
  },
  source:{
    fontSize:winWidth*0.04,
    color:'white',
    fontWeight:'600',

  },
  date:{
    color:'white',
    fontSize:winWidth*0.02,
    fontWeight:'500'
  },
  iconsWrapper:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:winWidth*0.15,
  
  }

});

export default styles;
