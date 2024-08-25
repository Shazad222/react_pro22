// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Login.css"; // Import the new Login.css file

function Login() {
    const [loginAsAdmin, setLoginAsAdmin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        if (loginAsAdmin) {
            if (email === 'admin@example.com' && password === 'adminpassword') {
                navigate('/display-data', {
                    state: {
                        firstName: 'Admin',
                        lastName: 'User',
                        email: 'admin@example.com',
                        gender: 'male',
                        profilePicture: null
                    }
                });
            } else {
                setError('Invalid admin credentials');
            }
        } else {
            if (userName === 'testuser' && userPassword === 'userpassword') {
                alert('User logged in successfully');
            } else {
                setError('Invalid user credentials');
            }
        }
    };

    const handleGoToSignup = () => {
        navigate('/'); // Navigate back to the signup page for admin
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <div className="switch-container">
                <label>
                    <input
                        type="radio"
                        checked={loginAsAdmin}
                        onChange={() => setLoginAsAdmin(true)}
                    />
                    Login as Admin
                </label>
                <label>
                    <input
                        type="radio"
                        checked={!loginAsAdmin}
                        onChange={() => setLoginAsAdmin(false)}
                    />
                    Login as User
                </label>
            </div>
            <form onSubmit={handleLogin} className="login-form">
                {loginAsAdmin ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <div className="form-group">
                            <label>Username:</label>
                            <input
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                value={userPassword}
                                onChange={(e) => setUserPassword(e.target.value)}
                                required
                            />
                        </div>
                    </>
                )}
                {error && <p className="error">{error}</p>}
                <button type="submit" className="submit-button">Login</button>
            </form>

            {/* New button to navigate to the signup page */}
            <button onClick={handleGoToSignup} className="signup-button">Go to Signup Page for Admin</button>
        </div>
    );
}

export default Login;
