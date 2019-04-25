import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Logo from "./Components/Logo";
import * as api from "./api";
import { Router } from "@reach/router";
import Home from "./Components/Home";
import Articles from "./Components/Articles";
import Authors from "./Components/Authors";
import Topics from "./Components/Topics";
import Article from "./Components/Article";
import Topic from './Components/Topic';
import "./App.css";

class App extends Component {
  state = {
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
    const { articles, topics } = this.state;
    return (
      <div className="App">
        <Header />
        <Nav topics={topics} articles={articles} />
        <Logo />

        <Router className="Main">
          <Home path="/" />
          <Articles path="/articles" articles={articles} />
          <Article path="/articles/:article_id" />
          <Authors path="/authors" />
          <Topics path="/topics" topics={topics} />
          <Topic path="/topics/:topic" />
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
}

export default App;
