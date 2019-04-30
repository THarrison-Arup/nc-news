import React, { Component, navigate } from "react";
import * as api from "../api";
import "./css/Main.css";
import ArticlesSearchForm from "./ArticlesSearchForm";
import ArticlesSearchResponse from "./ArticlesSearchResponse";
import ArticlesAdderForm from "./ArticlesAdderForm";
import ArticlesAdderRepsonse from "./ArticlesAdderResponse";

class Articles extends Component {
  state = {
    searchCriteria: {},
    searchtopic: "",
    searchtitle: "",
    searchauthor: "",
    sort_by: "",
    addtitle: "",
    addauthor: "",
    addtopic: "",
    articleData: []
  };

  render() {
    const {
      searchtopic,
      searchauthor,
      searchtitle,
      sort_by,
      addauthor,
      addtitle,
      addtopic
    } = this.state;

    return (
      <div className="Main-Articles">
        <ArticlesSearchForm
          handleArticleSearchSubmit={this.handleArticleSearchSubmit}
          handleArticleSearchInput={this.handleArticleSearchInput}
          handleArticleSearchClearInputs={this.handleArticleSearchClearInputs}
          handleArticleSearchClearResults={this.handleArticleSearchClearResults}
          searchCriteria={{ searchtopic, searchauthor, searchtitle }}
          handleSortInput={this.handleSortInput}
        />
        <ArticlesSearchResponse articleData={this.state.articleData} />
        <ArticlesAdderForm
          handleArticleAddSubmit={this.handleArticleAddSubmit}
          handleArticleAddClear={this.handleArticleAddClear}
          handleArticleAddInput={this.handleArticleAddInput}
          addCriteria={{ addauthor, addtitle, addtopic }}
        />
        <ArticlesAdderRepsonse />
      </div>
    );
  }

  // Functions...
  handleArticleSearchSubmit = event => {
    event.preventDefault();
    const { searchtopic, searchauthor, searchtitle, sort_by } = this.state;

    api
      .fetchArticleBySearch(searchauthor, searchtitle, searchtopic, sort_by)
      .then(articles => {
        this.setState(({ articleData }) => ({
          articleData: [...articleData, ...articles]
        }));
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

  handleSortInput = criteria => event => {
    console.log(criteria)
    const { name, value } = event.target;
    this.setState({
      sort_by: value
    })
  }

  handleArticleSearchInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleArticleSearchClearInputs = event => {
    event.preventDefault();
    this.setState({
      searchid: "",
      searchauthor: "",
      searchtitle: ""
    });
  };

  handleArticleSearchClearResults = event => {
    event.preventDefault();
    this.setState({
      articleData: []
    });
  };

  handleArticleAddSubmit = event => {
    event.preventDefault();
  };

  handleArticleAddInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleArticleAddClear = event => {
    event.preventDefault();
    this.setState({
      addtitle: "",
      addauthor: "",
      addtopic: ""
    });
  };
}

export default Articles;
