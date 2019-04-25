import React, { Component } from "react";
import * as api from "../api";
import "./css/MainArticle.css";
import ArticleInformation from "./ArticleInformation";
import ArticleComments from "./ArticleComments";
import ArticleVotes from './ArticleVotes';

class Article extends Component {
  state = {
    article: {},
    comments: [],
    commentAuthor: '',
    commentBody: '',
    commentArticleId: ''
  };
  render() {
    const { article, comments, commentAuthor, commentBody } = this.state;
    const { location, article_id } = this.props;
    const { pathname } = location;

    return (
      <div className="Main-Article">
        <h2>{article.title}</h2>
        <ArticleInformation article={article} comments={comments}/>
        <ArticleComments 
          article={article}
          commentInput={this.handleCommentInput}
          submitComment={this.handleArticleCommentSubmit}
          clearCommentInput={this.handleArticleCommentClear}
          commentValues={{commentAuthor, commentBody}}
        />
        <ArticleVotes />
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

  handleCommentInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleArticleCommentSubmit = event => {
    event.preventDefault();
  }
  
  handleArticleCommentClear = event => {
    event.preventDefault();
    this.setState({
      commentAuthor: "",
      commentBody: ""
    })
  }

  componentDidMount = async () => {
    const articleData = this.getArticleInformation(this.props.article_id);
    const commentData = this.getArticleComments(this.props.article_id);
  }
}

export default Article;
