import React from "react";
import "./css/Nav.css";

const Nav = ({ topics, articles }) => {

  return (
    <div className="Nav">
      <ol className="Nav-Home-Articles">
        <h4>Top Articles</h4>
        {articles.map(article => (
          <li key={article.article_id}>{article.title} by {article.author}<br/><br/></li>
        ))}
      </ol>
      <ol className="Nav-Home-Topics">
        Hot Topics
        {topics.map(topic => (
          <li key={topic.slug}>{topic.slug}</li>
        ))}
      </ol>
    </div>
  );
};

export default Nav;
