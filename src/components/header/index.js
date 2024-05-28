import { View, Text } from "react-native";
import React from "react";
import  TextInputcomp from "../textInputComp";

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
const Header = (props) => {
  const {handleSubmit} =props
  
  return (
    <View style={styles.container}>
      <TextInputcomp  handleSubmit = {handleSubmit}/>
      <Ionicons  name='menu' size={35} color='black'/>
    </View>
  );
};

export default Header;
