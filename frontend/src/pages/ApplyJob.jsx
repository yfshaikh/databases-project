import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ApplyJob() {
  const { jobId } = useParams();
  const [notes, setNotes] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ jobId, notes, resume });
  };

  return (
    <div className="container">
      <h2>Apply to Job ID: {jobId}</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Additional Notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setResume(e.target.files[0])}
        />
        <button type="submit">Submit Application</button>
      </form>
    </div>

  );
}

export default ApplyJob;
