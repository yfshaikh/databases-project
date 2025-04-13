import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function UpdateStatus() {
  const { applicationId } = useParams();
  const [status, setStatus] = useState('Pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Updated status for Application ${applicationId} to ${status}`);
  };

  return (
    <div className="update-status-container">
      <h2 className="title">Update Status for Application ID: {applicationId}</h2>
      <form onSubmit={handleSubmit} className="status-form">
        <div className="form-group">
          <label htmlFor="status" className="form-label">Select Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="status-select"
          >
            <option value="Pending">Pending</option>
            <option value="Reviewed">Reviewed</option>
            <option value="Interview Scheduled">Interview Scheduled</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Update Status</button>
      </form>
    </div>
  );
}

export default UpdateStatus;
