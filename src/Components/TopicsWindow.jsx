import React from "react";
import TopicCardArticles from "./TopicCardArticles";

const TopicsWindow = props => {
  const { topics, articles } = props;

  console.log(articles,'<<<<articles')

  return (
    <ul className="Topics-Window">
      <h2>Topics</h2>
      {topics.map(topic => {
        return (
          <li className="Topics-Topic-Card" key={topic.slug}>
            <h3 className="Topics-Topic-Card-Slug">{topic.slug}</h3>
            <p className="Topics-Topic-Card-Description">{topic.description}</p>
            <TopicCardArticles articles={articles} topic={topic.slug} />
          </li>
        );
      })}
    </ul>
  );
};

export default TopicsWindow;
