import { View, Text,Image } from "react-native";
import React from "react";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DetailNewsHeader = (props) => {
    const {source, date} = props
  return (
    <View style={styles.container}>
       <Image  source={{uri:'https://cdn.karar.com/news/1696665.jpg'}} style={styles.image} />
        <View style={styles.innerContainer}>
             <View style={styles.textWrapper}>
                  <Text style={styles.source} >{source} </Text>
                  <Text style={styles.date}>{date?.slice(0,10)} </Text>
             </View>
             <View style={styles.iconsWrapper}> 
                <Icon name = {'bookmark'} size={25} color={'white'}  style={styles.icon}/>
                <Icon name = {'share'} size={25} color={'white'}  style={styles.icon} />
             </View>
        </View>
    </View>
  );
};

export default DetailNewsHeader;
