import React, { Component } from "react";
import * as api from "../api";
import "./css/MainArticle.css";
import ArticleInformation from "./ArticleInformation";
import ArticleComments from "./ArticleComments";

class Article extends Component {
  state = {
    article: {},
    comments: []
  };
  render() {
    const { article, comments } = this.state;
    const { location, article_id } = this.props;
    const { pathname } = location;

    return (
      <div className="Main-Article">
        <h2>{article.title}</h2>
        <ArticleInformation article={article} comments={comments}/>
        <ArticleComments 
          article={article}
          submitComment={this.handleArticleCommentSubmit}
          clearCommentInput={this.handleArticleCommentClear}
        />
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

  getArticleComments = article_id => {
    api.fetchCommentsById(article_id)
    .then(comments => {
      this.setState({
        comments
      })
    })
  }

  handleArticleCommentSubmit = event => {
    event.preventDefault();
  }
  
  handleArticleCommentClear = event => {
    event.preventDefault();
  }

  componentDidMount = async () => {
    const articleData = this.getArticleInformation(this.props.article_id);
    const commentData = this.getArticleComments(this.props.article_id);
  }
}

export default Article;
