import {View, Text, TextInput} from 'react-native';
import React, { useState } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles';
const TextInputcomp = (props) => {
  const {handleSearch} = props;
  const [input,setInput] =useState('')

  const onSubmitEdit =()=>{
    console.log('current input', input)
    handleSearch(input)
  }
  return (
    <View style={styles.container}>
       <TextInput placeholder='search for a new' 
        onChangeText={(val)=>setInput(val)}
        value={input}
        onSubmitEditing={onSubmitEdit}
       />

       <Ionicons name='search' size={25}  color='#5D5D5D' />
    </View>
  );
};

export default TextInputcomp;
