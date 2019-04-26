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
    commentArticleId: '',
    commentRepsonse: {}
  };
  render() {
    const { article, comments, commentAuthor, commentBody, commentResponse } = this.state;

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
          commentRespons={commentResponse}
        />
        <ArticleVotes
          article={article}
          incVotes={this.incVotes}
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
    .catch(err => {
      this.props.navigate('/error', {
        replace: true,
        state: {
          code: err.code,
          message: err.message,
          from: '/articles'
        }
      })
    });
  };

  getArticleComments = article_id => {
    api.fetchCommentsById(article_id)
    .then(comments => {
      this.setState({
        comments
      })
    })
    .catch(err => {
      this.props.navigate('/error', {
        replace: true,
        state: {
          code: err.code,
          message: err.message,
          from: '/articles'
        }
      })
    });
  }

  handleCommentInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleArticleCommentSubmit = event => {
    const {commentAuthor, commentArticleId, commentBody} = this.state;
    const comment = {author: commentAuthor, body: commentBody };

    event.preventDefault();

    api.sendArticleComment(commentArticleId, comment)
    .then(commentResponse => {
      this.setState({
        commentResponse
      })
    })
    .catch(err => {
      this.props.navigate('/error', {
        replace: true,
        state: {
          code: err.code,
          message: err.message,
          from: '/articles'
        }
      })
    });
  }
  
  handleArticleCommentClear = event => {
    event.preventDefault();
    this.setState({
      commentAuthor: "",
      commentBody: ""
    })
  }

  incVotes = (article, inc) => event => {
    event.preventDefault();
    api.updateArticleVotes(article.article_id, inc)
    .then(article => {
      this.setState({
        article
      })
    })
    .catch(err => {
      this.props.navigate('/error', {
        replace: true,
        state: {
          code: err.code,
          message: err.message,
          from: '/articles'
        }
      })
    });
  };

  componentDidMount = async () => {
    this.getArticleInformation(this.props.article_id);
    this.getArticleComments(this.props.article_id);
  }
}

export default Article;
