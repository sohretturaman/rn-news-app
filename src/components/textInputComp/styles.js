import { Dimensions, StyleSheet, Text, View } from "react-native";
const winWidth = Dimensions.get('window').width;





const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#D3D3D3',
        justifyContent:'space-between',
        paddingHorizontal:winWidth*0.02,
        alignItems:'center',
        width  :winWidth*0.8,
        borderRadius:winWidth*0.03,
        height:winWidth*0.1
    }
});


export default styles;