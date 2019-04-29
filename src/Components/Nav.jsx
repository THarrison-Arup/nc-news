import React from "react";
import {Link} from "@reach/router";
import "./css/Nav.css";

const Nav = ({ topics, articles }) => {

  return (
    <div className="Nav">
      <ol className="Nav-Home-Articles">
        <h4>Top Articles</h4>
        {articles.map(article => (
          <li key={article.article_id}><Link to={`/articles/${article.article_id}`}>{article.title}</Link> by {article.author}<br/><br/></li>
        ))}
      </ol>
      <ol className="Nav-Home-Topics">
        <h4>Hot Topics</h4>
        {topics.map(topic => (
          <li key={topic.slug}><Link to={`/topics/${topic.slug}`}>{topic.slug}</Link></li>
        ))}
      </ol>
    </div>
  );
};

export default Nav;
