import React from "react";
import "./css/Nav.css";

const Nav = ({ topics, articles }) => {
  return (
    <div className="Nav">
      <ul className="Nav-Home-Articles">
        Top Articles
        {articles.map(article => (
          <li key={article.article_id}>{article.article_id}</li>
        ))}
      </ul>
      <ul className="Nav-Home-Topics">
        Hot Topics
        {topics.map(topic => (
          <li key={topic.slug}>{topic.slug}</li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
