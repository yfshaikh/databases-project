import React, { useState } from 'react';

function SignupJobSeeker() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up as Job Seeker:', name, email, phone, resume);
  };

  return (
    <div className="container">
      <h2>Sign Up as Job Seeker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <input
          type="file"
          onChange={(e) => setResume(e.target.files[0])}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupJobSeeker;
