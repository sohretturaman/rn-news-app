import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
const BackHeader = (props) => {
    const {handleBack} = props
  return (
    <View style={styles.container}>
       <TouchableOpacity
         onPress={handleBack}
       style={styles.iconWrapper}>
        <Ionicons name="arrow-back" size={24} color="black" />
       </TouchableOpacity>

    </View>
  );
};

export default BackHeader;
