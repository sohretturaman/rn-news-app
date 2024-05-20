import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {BackHeader, CategoryButton, DetailNewsHeader} from '../../components';

const Detail = props => {
  const {navigation, route} = props;
  const {item} = route?.params;
const handleBack = ()=>{
  navigation.goBack()
}
  return (
    <View style={styles.container}>
        <BackHeader  handleBack={handleBack}/>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.opacityContainer} />
      <ScrollView style={styles.innerContainer}>
        <View style={styles.buttonsWrapper}>
          <CategoryButton title={item?.tag} />
          <CategoryButton title={item?.tag} />
        </View>
        <Text numberOfLines={2} style={styles.title}>{item.name} </Text>
        <View style={styles.bottomWrapper}>
             <DetailNewsHeader  source={item.source} date={item.date} />
             <Text style={styles.desc}>{item.description}</Text>
             <Text style={styles.desc}>{item.description}</Text>
             <Text style={styles.desc}>{item.description}</Text>
             <Text style={styles.desc}>{item.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;
