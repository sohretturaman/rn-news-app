import {View, Text, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Header, NewsList, TextInputcomp} from '../../components';
import { NewsApi } from '../../service';

const winWidth = Dimensions.get('window').width;
const News = props => {
  const {navigation} = props;
  const [news, setNews] = useState([]);

  const getByCountry = countryInfo => {
    console.log('categoryInfo', countryInfo);
    const urlSent = `?country=${countryInfo}&tag=general`;
    NewsApi.getNewsApi(urlSent)
      .then(data => {
        console.log('data in home', data);
        setNews(data.result);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  };

  const handleSubmit = info => {
    getByCountry(info);
    console.log('handleSybmit info ?', info);
  };
  return (
    <View>
      < TextInputcomp handleSearch={handleSubmit} />
      <NewsList Height={winWidth * 1.5} navigation={navigation} />
    </View>
  );
};

export default News;
