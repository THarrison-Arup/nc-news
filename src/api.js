import axios from 'axios';

const BASE_URL = 'https://nc-news-sql-tharrison.herokuapp.com/api'

export const fetchArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles`);
  return data.articles;
};

export const fetchTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const fetchArticleBySearch = async (id, author, title) => {
  // if (author || title) {
  //   const { data } = await axios.get(`${BASE_URL}/articles/${id}?author=${author}&title=${title}`);
  //   return data.articles;
  // } else {
    const { data } = await axios.get(`${BASE_URL}/articles/${id}`);
    return data;
  // }
}