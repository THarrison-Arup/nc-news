import React, {Component} from "react";
import "./css/Profile.css";
import * as api from '../api';
import {Link} from '@reach/router';

class Profile extends Component {
  state = {
    articles: []
  };

  render() {
    const { username, avatar_url, name } = this.props.user;

    const {articles} = this.state;

    console.log(articles)

    return (
      <div className="Profile">
        <p className="Profile-User">Hello {name}
        <h2>Coming Soon!</h2>

        Click <Link to="/">HERE</Link> to return to Home.
        </p>
        {/* <ul className="Profile-Article-List">
          {articles.map(article => {
            return (
              <li key={article.article_id}>
              {article.title}</li>
              )
          })}
        </ul> */}
      </div>
    );
  }

  getUserArticles = (username) => {
    api.fetchUserArticles(username)
    .then(articles => {
      this.setState({
        articles
      })
    })
  }

  componentDidMount(username) {
    this.getUserArticles(username)
  }
  
}

export default Profile;
