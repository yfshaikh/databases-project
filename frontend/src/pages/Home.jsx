import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Job Finder!</h1>
      <div className="links">
        <Link to="/login" className="link-item">Login</Link>
        <Link to="/signup/jobseeker" className="link-item">Sign Up as Job Seeker</Link>
        <Link to="/signup/recruiter" className="link-item">Sign Up as Recruiter</Link>
      </div>
    </div>
  );
}

export default Home;







