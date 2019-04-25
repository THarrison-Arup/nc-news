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

export const fetchArticleById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/articles/${id}`);
  return data.article;
}

export const fetchCommentsById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/comments?article_id=${id}`);
  return data.comments;
}

export const fetchUserData = async (username) => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  return data.user;
}