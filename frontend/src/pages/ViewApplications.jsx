import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ViewApplications() {
  const { jobId } = useParams();

  // Placeholder data
  const applications = [
    { id: 1, name: 'Alice Johnson', status: 'Pending' },
    { id: 2, name: 'Bob Smith', status: 'Interview Scheduled' },
  ];

  return (
    <div className="view-applications-container">
      <h2 className="title">Applications for Job ID: {jobId}</h2>
      <table className="applications-table">
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id}>
              <td>{app.name}</td>
              <td>{app.status}</td>
              <td><Link to={`/update-status/${app.id}`} className="update-link">Update</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewApplications;
