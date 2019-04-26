import React from 'react';

const Error = (props) => {
  const {code, from, key, message} = props.location.state;
  
  return (
    <div>
      <h2>
        OH NO!! {message}
      </h2>
    </div>
  );
};

export default Error;