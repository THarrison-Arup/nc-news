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
import Topic from "./Components/Topic";
import Auth from "./Components/Auth";
import Error from "./Components/Error";
import Contacts from "./Components/Contacts";
import Profile from "./Components/Profile";
import "./App.css";

class App extends Component {
  state = {
    articles: [],
    topics: [],
    user: {},
    error: null
  };

  render() {
    const { articles, topics, user, error } = this.state;
    return (
      <div className="App">
        <Header user={user} logout={this.logout}/>
        <Nav topics={topics} articles={articles} />
        <Logo />
        <Auth user={user} login={this.login}>
          <Router className="Main">
            <Home path="/" />
            <Articles path="/articles" articles={articles} />
            <Article path="/articles/:article_id" />
            <Authors path="/authors" />
            <Topics
              path="/topics"
              topics={topics}
              articles={articles}
              />
            <Topic path="/topics/:topic" />
            <Error path="/error" default error={error}/>
            <Contacts path="/Contacts"/>
            <Profile path="/MyProfile" user={user}/>
          </Router>
        </Auth>
        <Footer/>
      </div>
    );
  }

  componentDidMount = async () => {
    const articleData = await api.fetchArticles();
    const topicData = await api.fetchTopics();
    this.setState({
      topics: topicData,
      articles : articleData
    });
  };

  login = username => {
    api.fetchUserData(username)
    .then(user => {
      this.setState({
       user
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
    })
  };

  logout = () => {
    this.setState({
      user: {}
    })
  };
}

export default App;
