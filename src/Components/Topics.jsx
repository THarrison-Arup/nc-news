import React, { Component } from "react";
import "./css/MainTopics.css";
import TopicsWindow from "./TopicsWindow";

class Topics extends Component {
  state = {
  };

  render() {
    const { topics, articles } = this.props;

    return (
      <div className="Main-Topics">
        <TopicsWindow
          className="Topics-Window"
          topics={topics}
          articles={articles}
        />
      </div>
    );
  }
}

export default Topics;
