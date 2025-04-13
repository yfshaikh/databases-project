import React from 'react';
import { Link } from 'react-router-dom';

function JobSeekerDashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="title">Job Seeker Dashboard</h2>
      <div className="jobs-list">
        <h3>Available Jobs</h3>
        <Link to="/job/1" className="job-link">Job Title 1</Link>
        <Link to="/job/2" className="job-link">Job Title 2</Link>
      </div>
    </div>
  );
}

export default JobSeekerDashboard;
