// import { NEWS_URL } from "../NetworkUrls"
// import { get } from "../main"

// const getNewsList =(path)=>{
//     const newsUrl = NEWS_URL + path

//     const data =  get(newsUrl) 
//     console.log('data in getnewslist', data)
//     return data ; 
// }

// const addNews = (body)=>{
//     const data =  post(NEWS_URL,body) 
//     return data ; 
// }

// export  {getNewsList,addNews} ; 


import { GET_BY_LOCAL, NEWS_URL } from '../NetworkUrls';
import {get, post} from '../main';

const getNewsApi = body => {
  const TodosUrl = NEWS_URL + body;
  console.log('ger news api func in news index url',TodosUrl )
  return get(TodosUrl);
};

const getNewsLocalApi = detailUrl => {
  const  newsUrl = GET_BY_LOCAL + detailUrl;
  console.log('ger news api func in news index url',newsUrl )
  return get(newsUrl);
};

const PlaceApi = body => {
  return post(TodosPost, body);
};

export default {getNewsApi, PlaceApi};
