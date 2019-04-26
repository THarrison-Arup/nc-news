import React from "react";

const TopicsWindow = props => {
  const { topics, articles } = props;

  return (
    <ul className="Topics-Window">
      <h2>Topics</h2>
      {topics.map(topic => {
        return (
          <li className="Topics-Topic-Card">
            <h3 className="Topics-Topic-Card-Slug">
            {topic.slug}</h3>
            <p className="Topics-Topic-Card-Description">{topic.description}</p>
            <ul className="Topics-Topic-Card-Articles">
            {articles.map(article => {
              return (
                <li>
                  {article.title}
                </li>
              )
            })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default TopicsWindow;
