import React, { Component } from "react";
import "./css/Header.css";
import { Link } from "@reach/router";
import User from "./User";

class Header extends Component {
  render() {
    const { user, logout } = this.props;

    return !user.username ? (
      <div className="Header">
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
        <Link className="header-MyProfile" to="/MyProfile">
          My Profile
        </Link>
      </div>
    ) : (
      <div className="Header">
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
        <Link className="header-MyProfile" to="/MyProfile" user={user}>
          My Profile
        </Link>
        <User user={user} logout={logout}/>
      </div>
    );
  }
}

export default Header;
