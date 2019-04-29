import React from 'react';
import "./css/MainTopic.css";
// import * as api from "../api";

const Topic = (props) => {
  const {topic} = props;
  console.log(props)
  return (
    <div className="Main-Topic">
      Some information about {topic}
    </div>
  );
};

export default Topic;