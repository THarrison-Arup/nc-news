import React, { Component } from "react";
import "./css/Auth.css";

class Auth extends Component {
  state = {
    username: "",
    login: ""
  };

  render() {
    const {user, children} = this.props;
    return (
      !user.username 
      ?
      <form className="Auth">
        <input
          id="username"
          type="text"
          value={this.username}
          placeholder="Username"
          onChange={this.handleChange}
        />
        <button
          className="Auth-Submit"
          type="submit"
          onClick={this.handleSubmit}
        >
          Login
        </button>
      </form>
      : children
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username } = this.state;
    this.props.login(username);
  };
}

export default Auth;
