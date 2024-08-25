// DisplayData.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Signup.css'; // Import CSS file

function DisplayData() {
    const location = useLocation();
    const navigate = useNavigate();
    const { firstName, lastName, email, gender, profilePicture } = location.state || {};

    const [showAddUserForm, setShowAddUserForm] = useState(false);
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleLogout = () => {
        navigate('/'); // Redirect to signup page
    };

    const handleAddUser = () => {
        setShowAddUserForm(true);
    };

    const handleCreateUser = (event) => {
        event.preventDefault();
        // Logic to create a user, here we just log the values
        console.log('User Created:', { userName, userPassword });
        setUserName('');
        setUserPassword('');
        setShowAddUserForm(false);
    };

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <div className="admin-profile">
                    {profilePicture && (
                        <img
                            src={URL.createObjectURL(profilePicture)}
                            alt="Admin Profile"
                            className="profile-picture"
                        />
                    )}
                    <p><strong>{firstName} {lastName}</strong></p>
                    <p>{email}</p>
                </div>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>
            <div className="main-content">
                <button onClick={handleAddUser} className="add-user-button">Add User</button>
                {showAddUserForm && (
                    <form onSubmit={handleCreateUser} className="user-form">
                        <div className="form-group">
                            <label>User Name:</label>
                            <input
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>User Password:</label>
                            <input
                                type="password"
                                value={userPassword}
                                onChange={(e) => setUserPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">Create User</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default DisplayData;
