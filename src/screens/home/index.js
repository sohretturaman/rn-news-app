import { View, Text, Dimensions } from "react-native";
import React,{useEffect, useState,useCallback} from "react";
import { Header, NewsList, Title } from "../../components";
import HeaderImages from "../../components/headImages";
import CategoryButton from "../../components/categoryButton";

import { NewsApi } from "../../service";
import DummyData from "../../assets/DummyData";
import CategoryList from "../../components/categoryList";



const winWidth = Dimensions.get("window").width;
const Home = (props) => {
  const {navigation} = props
  const [category,setCategory] = useState('general');
  const [categoryData,setCategoryData] = useState(DummyData); 
  const [news, setNews] =useState(DummyData.result);

const country = 'tr';
const tag = 'general'; // means category!!
const urlSent = `?country=${country}&tag=${tag}`;



const  data  =useCallback( () => {
  NewsApi.getNewsApi(urlSent)
    .then(data => {
      setNews(data.result);
      console.log('news', news);
    })
    .catch(error => {
      console.error('Hata:', error);
    });


},[data])

useEffect(()=>{

  data(); 
},[data]);
const getByCategory =(categoryInfo)=>{
  console.log('categoryInfo', categoryInfo)
  const urlSent = `?country=${country}&tag=${categoryInfo}`;
  NewsApi.getNewsApi(urlSent)
    .then(data => {
      console.log('data in home', data);
      setCategoryData(data.result);
      console.log('news', news);
    })
    .catch(error => {
      console.error('Hata:', error);
    });
}


  return (
    <View>
      <Header />
      <Title />
      <HeaderImages data = {news} navigation={navigation}/>
      {/* <CategoryButton  onButtonPress={handleCategoryPress} category={category} setCategory={setCategory} categories={categories} /> */}
      <CategoryList selectedCategory={category}  selectedCategoryInfo={getByCategory} />
      <NewsList height ={winWidth*0.99}  navigation={navigation} data={categoryData.result} />
    </View>
  );
};

export default Home;
