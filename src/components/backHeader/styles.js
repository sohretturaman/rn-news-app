import { Dimensions, StyleSheet, Text, View } from "react-native";
const winWidth = Dimensions.get('window').width;





const styles = StyleSheet.create({
    container:{
     position:'relative',
        paddingHorizontal:winWidth*0.02
      ,
      justifyContent:'flex-end',
      marginBottom:winWidth*0.02,
      width:winWidth,
      zIndex:1,
      height:winWidth*0.1
    },
    iconWrapper:{
        height:winWidth*0.07,
        width:winWidth*0.08,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:winWidth*0.01
    }
});


export default styles;