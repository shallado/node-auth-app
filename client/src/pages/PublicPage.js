import React from 'react';
import { Link } from 'react-router-dom';

function PublicPage() {
  return (
    <div>
      <h1>Public Page</h1>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
    </div>
  );
}

export default PublicPage;
