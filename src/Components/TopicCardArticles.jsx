import React from "react";

const TopicCardArticles = props => {
  const { articles, topic } = props;

  const topicArticles = articles.filter(article => article.topic === topic);

  return (
    <ul className="Topics-Topic-Card-Articles">
      {topicArticles.map(article => {
        return <li>{article.title}</li>;
      })}
    </ul>
  );
};

export default TopicCardArticles;
