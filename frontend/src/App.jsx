import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import SignupJobSeeker from './pages/SignupJobSeeker';
import SignupRecruiter from './pages/SignupRecruiter';
import JobSeekerDashboard from './pages/JobSeekerDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';
import PostJob from './pages/PostJob';
import JobDetails from './pages/JobDetails';
import ApplyJob from './pages/ApplyJob';
import ViewApplications from './pages/ViewApplications';
import UpdateStatus from './pages/UpdateStatus';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/jobseeker" element={<SignupJobSeeker />} /> 
        <Route path="/signup/recruiter" element={<SignupRecruiter />} />
        <Route path="/jobseeker/dashboard" element={<JobSeekerDashboard />} />
        <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/apply/:jobId" element={<ApplyJob />} />
        <Route path="/view-applications/:jobId" element={<ViewApplications />} />
        <Route path="/update-status/:applicationId" element={<UpdateStatus />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
