import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const CategoryButton = props => {
  const {title = 'Tech', textColor = 'white', bgColor = '#0B115B',onButtonPress} = props;
  return (
    <TouchableOpacity
     onPress={onButtonPress}
    style={[styles.container, {backgroundColor: bgColor}]}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;
