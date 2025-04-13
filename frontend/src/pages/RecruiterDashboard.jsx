import React from 'react';
import { Link } from 'react-router-dom';

function RecruiterDashboard() {
  return (
    <div className="recruiter-dashboard-container">
      <h2 className="title">Recruiter Dashboard</h2>
      <div className="dashboard-content">
        <h3>Your Job Postings</h3>
        <Link to="/post-job" className="action-link">Post New Job</Link>
        <br />
        <Link to="/view-applications/1" className="action-link">View Applications</Link>
      </div>
    </div>
  );
}

export default RecruiterDashboard;
