import React from 'react';
import "./css/MainTopics.css"
// import * as api from "../api";
import TopicsWindow from './TopicsWindow';

const Topics = (props) => {
  const {topics, articles} = props;
  
  return (
    <div className="Main-Topics">
      <TopicsWindow className="Topics-Window"
      topics={topics}
      articles={articles}
      />
    </div>
  );
};

export default Topics;