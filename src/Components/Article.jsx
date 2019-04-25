import React, { Component } from "react";
import * as api from "../api";
import "./css/MainArticle.css";
import ArticleInformation from "./ArticleInformation";
import ArticleComments from "./ArticleComments";

class Article extends Component {
  state = {
    article: {}
  };
  render() {
    const { article } = this.state;
    const { location, article_id } = this.props;
    const { pathname } = location;

    return (
      <div className="Main-Article">
        <h2>Article Title Goes Here!</h2>
        <ArticleInformation article={article} />
        <ArticleComments />
      </div>
    );
  }

  //Functions...
  getArticleInformation = article_id => {
    api.fetchArticleById(article_id)
    .then(article => {
      this.setState({
        article
      })
    })
  };

  componentDidMount = async () => {
    const articleData = this.getArticleInformation(this.props.article_id)
  }
}

export default Article;
