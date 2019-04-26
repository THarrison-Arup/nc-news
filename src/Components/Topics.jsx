import React from "react";
import "./css/MainTopics.css";
// import * as api from "../api";
import TopicsWindow from "./TopicsWindow";

class Topics extends Component {
  state = {
    topics: []
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
  getTopicArticles = () => {};
}

export default Topics;
