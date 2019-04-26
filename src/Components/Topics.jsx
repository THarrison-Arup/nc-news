import React from 'react';
import "./css/MainTopics.css"
// import * as api from "../api";
import TopicsWindow from './TopicsWindow';

const Topics = () => {
  return (
    <div className="Main-Topics">
      <TopicsWindow className="Topics-Window"/>
    </div>
  );
};

export default Topics;