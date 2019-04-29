import React from 'react';
import "./css/MainTopic.css";
import {Link} from "@reach/router";
// import * as api from "../api";

const Topic = (props) => {
  const {topic} = props;
  console.log(props)
  return (
    <div className="Main-Topic">
      Information about {topic} will be available soon.

      Click <Link to="/topics">HERE</Link> to see all topics.
    </div>
  );
};

export default Topic;