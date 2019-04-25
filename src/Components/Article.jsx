import React from "react";
import * as api from "../api";
import "./css/MainArticle.css";
import ArticleInformation from "./ArticleInformation";
import ArticleCommentAdder from "./ArticleCommentAdder";

const Article = () => {
  return (
    <div className="Main-Article">
      <ArticleInformation />
      <ArticleCommentAdder />
    </div>
  );
};

export default Article;
