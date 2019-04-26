import React, { Component } from "react";
import * as api from "../api";
import "./css/Main.css";
import ArticlesSearchForm from "./ArticlesSearchForm";
import ArticlesSearchResponse from "./ArticlesSearchResponse";
import ArticlesAdderForm from "./ArticlesAdderForm";
import ArticlesAdderRepsonse from "./ArticlesAdderResponse";

class Articles extends Component {
  state = {
    searchCriteria: {},
    searchid: "",
    searchtitle: "",
    searchauthor: "",
    addtitle: "",
    addauthor: "",
    addtopic: "",
    articleData: []
  };

  render() {
    const {
      searchid,
      searchauthor,
      searchtitle,
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
          searchCriteria={{ searchid, searchauthor, searchtitle }}
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
    const { searchid, searchauthor, searchtitle, articleData } = this.state;

    api
      .fetchArticleBySearch(searchid, searchauthor, searchtitle)
      .then(articles => {
        console.log(articles)
        this.setState(({articleData}) => ({
          articleData: [...articleData, ...articles]
        }));
      });
  };

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
      articleData: {}
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
