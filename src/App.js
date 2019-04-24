import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Logo from "./Components/Logo";
// import * as api from "./api";
import { Router } from "@reach/router";
import Home from "./Components/Home";
import Articles from "./Components/Articles";
import Authors from "./Components/Authors";
import Topics from "./Components/Topics";

import "./App.css";
import { updateExpression } from "@babel/types";

class App extends Component {
  state = {
    searchid: "",
    searchtitle: "",
    searchauthor: "",
    addtitle: "",
    addauthor: "",
    addtopic: "",
    articles: [
      {
        article_id: 34,
        comment_count: "1"
      },
      {
        article_id: 32,
        comment_count: "1"
      },
      {
        article_id: 15,
        comment_count: "1"
      },
      {
        article_id: 4,
        comment_count: "1"
      },
      {
        article_id: 2,
        comment_count: "1"
      }
    ],
    topics: [
      {
        slug: "coding",
        description: "Code is love, code is life"
      },
      {
        slug: "football",
        description: "FOOTIE!"
      },
      {
        slug: "cooking",
        description: "Hey good looking, what you got cooking?"
      }
    ]
  };

  render() {
    const { articles, topics, searchid, searchauthor, searchtitle, addauthor, addtitle, addtopic } = this.state;
    return (
      <div className="App">
        <Header />
        <Nav topics={topics} articles={articles} />
        <Logo />

        <Router className="Main">
          <Home path="/" />
          <Articles
            path="/articles"
            articles={articles}
            handleArticleSearchSubmit={this.handleArticleSearchSubmit}
            handleArticleSearchInput={this.handleArticleSearchInput}
            handleArticleSearchClear={this.handleArticleSearchClear}
            handleArticleAddSubmit={this.handleArticleAddSubmit}
            handleArticleAddClear={this.handleArticleAddClear}
            handleArticleAddInput={this.handleArticleAddInput}
            searchCriteria={{searchid, searchauthor, searchtitle }}
            addCriteria={{addauthor, addtitle, addtopic}}
          />
          <Authors path="/authors" />
          <Topics path="/topics" topics={topics} />
        </Router>
        <Footer />
      </div>
    );
  }

  // componentDidMount = async () => {
  //   const articleData = await api.fetchArticles();
  //   const topicData = await api.fetchTopics();
  //   this.setState({
  //     topics: topicData,
  //     articles : articleData
  //   });
  //   console.log(this.state,'<-- state');
  // };

  handleArticleSearchSubmit = event => {
    event.preventDefault();
    console.log(event, "<--search submit event");
  };

  handleArticleSearchInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleArticleSearchClear = event => {
    event.preventDefault();
    this.setState({
        searchid: "",
        searchauthor: "",
        searchtitle: ""
    });
  };

  handleArticleAddSubmit = event => {
    event.preventDefault();
    console.log(event, "<--search submit event");
  }

  handleArticleAddInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleArticleAddClear = event => {
    event.preventDefault();
    this.setState({
        addtitle: "",
        addauthor: "",
        addtopic: ""
    });
  }
}

export default App;
