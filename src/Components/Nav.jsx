import React from "react";
import {Link} from "@reach/router";
import "./css/Nav.css";

const Nav = ({ topics, articles }) => {

  function voteSort(a, b) {
    if(a.votes < b.votes){
      return 1;
    }
    if (a.votes > b.votes){
      return -1;
    }
    return 0;
  }

  return (
    <div className="Nav">
      <ol className="Nav-Home-Articles">
        <h4>Top Articles by Votes</h4>
        {articles.sort(voteSort).map((article, ind) => (
          <li key={ind}><Link to={`/articles/${article.article_id}`}>{`${ind+1}. ${article.title}`}</Link>
          <br/> by {article.author}<br/>
          Votes = {article.votes}<br/><br/></li>
        ))}
      </ol>
      <ol className="Nav-Home-Topics">
        <h4>Hot Topics</h4>
        {topics.map((topic, ind) => (
          <li key={ind}><Link to={`/topics/${topic.slug}`}>{`${ind+1}. ${topic.slug}`}</Link></li>
        ))}
      </ol>
    </div>
  );
};

export default Nav;
