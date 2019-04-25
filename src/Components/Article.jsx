import React from "react";
import * as api from "../api";
import "./css/MainArticle.css";
import ArticleInformation from "./ArticleInformation";
import ArticleComments from "./ArticleComments";

const Article = () => {
  return (
    <div className="Main-Article">
      <h2>Article Title Goes Here!</h2>
      <ArticleInformation />
      <ArticleComments />
    </div>
  );
};

export default Article;
