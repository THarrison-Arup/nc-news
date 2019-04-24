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
    id: "",
    title: "",
    author: "",
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
    const { articles, topics, id, author, title } = this.state;
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
            handleArticleClearSubmit={this.handleArticleClearSubmit}
            searchCriteria={{id, author, title }}
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
    console.log(event, "<--submit event");

    // this.setState(state => {...this.setState});
  };

  handleArticleSearchInput = event => {
    console.log(this.state.articleSearch, "<--current articleSearch");
    // assign articleSearch to new variable
    const search = this.state.articleSearch;

    // capture the name and value off the event.target
    console.log(search, "<--old search");
    const { name, value } = event.target;

    console.log(
      name,
      "<--search key",
      value,
      "<--search value"
    );

    // set state to updated search object
    this.setState({
      [name]: value
    });
  };

  handleArticleClearSubmit = event => {
    event.preventDefault();
    console.log(event, "<--clear event");
    const articleSearch = this.state.articleSearch;
    const { id, author, title } = this.state;

    this.setState({
        id: "",
        author: "",
        title: ""
    });
  };
}

export default App;
