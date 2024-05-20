import { Dimensions, StyleSheet, Text, View } from "react-native";
const winWidth = Dimensions.get('window').width;





const styles = StyleSheet.create({

    container:{
        width:winWidth*0.9,
        alignSelf:'center',
        marginTop:winWidth*0.04
    }
});


export default styles;