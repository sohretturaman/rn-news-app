import {View, Text, FlatList, Dimensions} from 'react-native';
import React from 'react';
import DummyData from '../../assets/DummyData';
import NewsItem from '../newsItem';
import styles from './styles';

const NewsList = (props) => {
  const {height,navigation,data} = props
 
  return (
    <View style={[styles.container,{ height:height}]}>
       <FlatList
       showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item})=><NewsItem  navigation= {navigation}  data = {item} />}
        keyExtractor={(item) =>item.key}
       />
    </View>
  );
};

export default NewsList;
