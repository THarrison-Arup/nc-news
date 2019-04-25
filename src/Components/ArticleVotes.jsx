import React from "react";

const ArticleVotes = props => {
  const { article } = props;

  return (
    <div className="Article-Votes">
      <a className="Article-Votes-Count">{article.votes}</a>
      <button
        className="Article-Votes-Up"
        type="submit"
        onClick
      >Vote Up!</button>
      <button
        className="Article-Votes-Down"
        type="submit"
        onClick
      >Vote Down!</button>
    </div>
  );
};

export default ArticleVotes;
