import { Dimensions, StyleSheet, Text, View } from "react-native";
const winWidth = Dimensions.get('window').width;





const styles = StyleSheet.create({
    container:{
        width:winWidth,
       
        paddingHorizontal:winWidth*0.05,
        marginVertical:winWidth*0.02
    },
    title:{
        fontSize:winWidth*0.07,
        fontWeight:'500',
        color:'black'
    }
    ,
    subTitle:{
        fontSize:winWidth*0.035,
        fontWeight:'400'
        , color:'#3333333'
    }
});


export default styles;