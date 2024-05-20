import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good Morning
    
      </Text>
      <Text style={styles.subTitle} >Explore the world by one click</Text>
    </View>
  );
};

export default Title;
