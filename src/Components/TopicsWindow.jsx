import React from "react";
import TopicCardArticles from "./TopicCardArticles";
import { Link } from '@reach/router';

const TopicsWindow = props => {
  const { topics, articles } = props;
  
  return (
    <ul className="Topics-Window">
      <h2>Topics</h2>
      {topics.map(topic => {
        return (
          <li className="Topics-Topic-Card" key={topic.slug}>
            <h3
              className="Topics-Topic-Card-Slug"
              ><Link
                to={`/topics/${topic.slug}`}
                >{topic.slug}</Link></h3>
            <p className="Topics-Topic-Card-Description">{topic.description}</p>
            <TopicCardArticles articles={articles} topic={topic.slug} />
          </li>
        );
      })}
    </ul>
  );
};

export default TopicsWindow;
