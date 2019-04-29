import React from 'react';
import "./css/MainHome.css";

const Home = () => {
  return (
    <div className="container">
      <img src={'http://jewel1067.com/wp-content/uploads/news.jpg'}/>
      <div className="overlay">
        <h4 className="text">
          Welcome to North News!
        </h4>
      </div>
    </div>
  );
};

export default Home;