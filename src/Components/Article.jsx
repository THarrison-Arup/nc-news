import React, { Component } from "react";
import * as api from "../api";
import "./css/MainArticle.css";
import ArticleInformation from "./ArticleInformation";
import ArticleComments from "./ArticleComments";

class Article extends Component {
  state = {};
  render() {
    const {} = this.state;
    const {} = this.props;

    return (
      <div className="Main-Article">
        <h2>Article Title Goes Here!</h2>
        <ArticleInformation />
        <ArticleComments />
      </div>
    );
  }
}

export default Article;
