import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import  styles from './styles'
import { RouterNames } from "../../config";

const NewsItem = (props) => {
 
 const {data, navigation} = props  ; 

 const handlePress = () =>{
   navigation.navigate(RouterNames.DETAIL,{item:data})
 }
  return (
    <TouchableOpacity
      onPress={ handlePress}
     
    style={styles.container}>
       <View style={styles.imageWrapper}>
         <Image 
          source={{uri: data.image}}
          style={styles.image}
         />
       </View>

       <View style={styles.innerContainer}>
         <Text numberOfLines={2} style={styles.title}>{data.name} </Text>
         <View style={styles.bottomWrapper}>
           <Text style={styles.source}>
            {data.source}
           </Text>
           <Text style={styles.source}>{data.date?.slice(0,10)}</Text>
         </View>
       </View>
    </TouchableOpacity>
  );
};

export default NewsItem;
