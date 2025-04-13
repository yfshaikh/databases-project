import React from 'react';
import { useParams, Link } from 'react-router-dom';

function JobDetails() {
  const { id } = useParams();

  // Placeholder job data
  const job = {
    jobTitle: 'Software Engineer',
    company: 'Comet Tech',
    location: 'Remote',
    salary: '$100k–$120k',
    description: 'We are looking for a Software Engineer...',
  };

  return (
    <div className="container">
      <h2>{job.jobTitle}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p>{job.description}</p>
      <Link to={`/apply/${id}`}><button>Apply Now</button></Link>
    </div>
  );
}

export default JobDetails;
