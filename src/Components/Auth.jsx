import React, { Component } from "react";
import "./css/Auth.css";

class Auth extends Component {
  state = {
    username: ""
  };

  render() {
    const { username } = this.state;

    return (
      <form className="Auth">
        <input
          id="=username"
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
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    console.log(id, value);
    this.setState({
      [id]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // const { username } = this.state;
  };
}

export default Auth;
