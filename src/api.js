import axios from 'axios';

export const fetchArticles = async () => {
  const { data } = await axios.get(
    "https://nc-news-sql-tharrison.herokuapp.com/api/articles"
  );
  return data.articles;
};

export const fetchTopics = async () => {
  const { data } = await axios.get(
    "https://nc-news-sql-tharrison.herokuapp.com/api/topics"
  );
  return data.topics;
};