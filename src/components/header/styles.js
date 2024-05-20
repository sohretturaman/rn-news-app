import { Dimensions, StyleSheet, Text, View } from "react-native";
const winWidth = Dimensions.get('window').width;





const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:winWidth*0.02
      ,
      alignItems:'center',
      marginVertical:winWidth*0.02
    }
});


export default styles;