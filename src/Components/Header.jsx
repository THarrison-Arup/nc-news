import React, { Component } from "react";
import "./css/Header.css";
import { Link } from "@reach/router";
import Auth from "./Auth";
import User from "./User";

class Header extends Component {
  render() {
    const { user } = this.props;

    return !user.username ? (
      <div className="Header">
        <h2 className="header-Header" to="">
          NC News
        </h2>
        <Link className="header-Home" to="/">
          Home
        </Link>
        <Link className="header-Authors" to="/authors">
          Authors
        </Link>
        <Link className="header-Articles" to="/articles">
          Articles
        </Link>
        <Link className="header-Topics" to="/topics">
          Topics
        </Link>
        <Link className="header-MyProfile" to="">
          My Profile
        </Link>
      </div>
    ) : (
      <div className="Header">
        <h2 className="header-Header" to="">
          NC News
        </h2>
        <Link className="header-Home" to="/">
          Home
        </Link>
        <Link className="header-Authors" to="/authors">
          Authors
        </Link>
        <Link className="header-Articles" to="/articles">
          Articles
        </Link>
        <Link className="header-Topics" to="/topics">
          Topics
        </Link>
        <Link className="header-MyProfile" to="">
          My Profile
        </Link>
        <User user={user}/>
      </div>
    );
  }
}

export default Header;
