import React from "react";
import { Link } from '@reach/router'

const ArticlesSearchResponse = ({
  articleData,
}) => {
  const {article} = articleData;
  return (
    <main className="Articles-Search-Repsonse">
      <h3>Search Results</h3>
      <ul className="Articles-Search-Results">
        <li>
        {article ? <Link to={`${article.article_id}`}>{article.title}</Link> : ""}
        </li>
      </ul>
    </main>
  );
};

export default ArticlesSearchResponse;
