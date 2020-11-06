import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="c-not-found">
      <h1>Something's wrong here</h1>
      <p>We can't find the page you are looking for!</p>

      <Link to="/">Head back to home</Link>
    </div>
  );
};

export default NotFound;
