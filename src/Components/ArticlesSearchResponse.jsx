import React from "react";

const ArticlesSearchResponse = ({
  articleData,
}) => {
  const {article} = articleData;
  return (
    <main className="Articles-Search-Repsonse">
      <h3>Search Results</h3>
      <ul className="Articles-Search-Results">
        <li>{article ? article.title : ""}</li>
      </ul>
    </main>
  );
};

export default ArticlesSearchResponse;
