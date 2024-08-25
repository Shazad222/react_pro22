// utils.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Signup.css"; // Import CSS file

export function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('male');
  const [adminCode, setAdminCode] = useState('');
  const [profilePicture, setProfilePicture] = useState(null); // State for profile picture
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload

    // Check if all fields are filled out
    if (!firstName || !lastName || !email || !password || !confirmPassword || !adminCode || !profilePicture) {
      setError('All fields are required, including the profile picture.');
      return;
    }

    // Check password complexity
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long and contain at least one letter and one number.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Simulate admin code verification
    if (adminCode !== 'ADMIN1234') {
      setError('Invalid admin code.');
      return;
    }

    // If all checks pass, navigate to the new page with state
    setError(''); // Clear any existing errors
    setSubmitted(true); // Sets submitted to true to display the success message

    navigate('/display-data', { state: { firstName, lastName, email, gender, profilePicture } });
  };

  const handleFileChange = (event) => {
    setProfilePicture(event.target.files[0]); // Save the selected file to state
  };

  const handleGoToLogin = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            value="male"
            checked={gender === 'male'}
            onChange={() => setGender('male')}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={gender === 'female'}
            onChange={() => setGender('female')}
          />
          Female
        </label>
      </div>
      <div className="form-group">
        <label>Admin Code:</label>
        <input
          type="text"
          value={adminCode}
          onChange={(e) => setAdminCode(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Profile Picture:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} required />
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit" className="submit-button">Submit</button>
      {submitted && <p>Admin account has been successfully created!</p>}

      {/* New button to navigate to the login page */}
      <button type="button" className="submit-button" onClick={handleGoToLogin}>
        Already have an account? Go to Login
      </button>
    </form>
  );
}
