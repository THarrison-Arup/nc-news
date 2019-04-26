import React from 'react';

const User = (props) => {

  const {user, logout} = props;

  return (
    <div className="header-User">
      <p className="header-User-Username">
      {`Welcome ${user.username}`}
      </p>
      <button className="header-User-Logout" type="submit" onClick={logout}>Logout</button>
    </div>
  );
  
};

export default User;