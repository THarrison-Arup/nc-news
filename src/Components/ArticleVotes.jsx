import React from "react";

const ArticleVotes = props => {
  const { article, incArticleVotes } = props;

  return (
    <div className="Article-Votes">
      <p className="Article-Votes-Count">{article.votes}</p>
      <button
        className="Article-Votes-Up"
        type="submit"
        onClick={incArticleVotes(article, +1)}
      >Vote Up!</button>
      <button
        className="Article-Votes-Down"
        type="submit"
        onClick={incArticleVotes(article, -1)}
      >Vote Down!</button>
    </div>
  );
};

export default ArticleVotes;
