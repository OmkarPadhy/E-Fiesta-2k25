// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from './context/Authcontext';
// import Navbar from './Navbar';
// import axios from 'axios';
// import './Login.css';

// axios.defaults.baseURL = 'http://localhost:5000';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const { login } = useAuth();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError("");
//         setLoading(true);

//         // Basic validation
//         if (!email) {
//             setError("Email is required");
//             setLoading(false);
//             return;
//         }

//         if (!password) {
//             setError("Password is required");
//             setLoading(false);
//             return;
//         }

//         try {
//             const response = await axios.post('/api/users/login', {
//                 email,
//                 password
//             });

//             if (response.data.success) {
//                 if (response.data.isAdmin) {
//                     localStorage.setItem("userInfo", JSON.stringify({
//                         isAdmin: true,
//                         token: response.data.token
//                     }));
//                     login({ isAdmin: true });
//                     navigate("/admin-dashboard");
//                 } else {
//                     localStorage.setItem("userInfo", JSON.stringify(response.data.data));
//                     login(response.data.data);
//                     navigate("/profile");
//                 }
//             } else {
//                 setError(response.data.message || "Login failed");
//             }
//         } catch (err) {
//             console.error("Login error:", err);
//             setError(err.response?.data?.message || "Login failed. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="login-container">
//             <Navbar />
//             <div className="background">
//                 {[...Array(10)].map((_, index) => (
//                     <div key={index} className={`cube cube-${index + 1}`}></div>
//                 ))}
//             </div>
//             <div className="login-box">
//                 <div className="login-icon">&#x2699;</div>
//                 <h2>Login</h2>
//                 {error && <p className="error-message">{error}</p>}
//                 <form onSubmit={handleLogin}>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         className="input-field"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         className="input-field"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                     <button type="submit" className="submit-button" disabled={loading}>
//                         {loading ? 'Logging in...' : 'LOGIN'}
//                     </button>
//                 </form>
//                 <p className="signup-link">
//                     New user? <Link to="/signup">Sign up</Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './context/Authcontext';
import Navbar from './Navbar';
import axios from 'axios';
import './Login.css';

axios.defaults.baseURL = 'http://localhost:5000';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login, user } = useAuth();

    useEffect(() => {
        // Redirect if already logged in
        if (user) {
            if (user.isAdmin) {
                navigate('/admin-dashboard');
            } else {
                navigate('/profile');
            }
        }
    }, [user, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (error) setError('');
    };

    const validateForm = () => {
        if (!formData.email.trim()) {
            setError('Email is required');
            return false;
        }
        if (!formData.password) {
            setError('Password is required');
            return false;
        }
        return true;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        setError('');

        try {
            const response = await axios.post('/api/users/login', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const { data } = response;

            if (data.success) {
                const userData = {
                    id: data.data?._id || data.data?.id,
                    name: data.data?.name,
                    email: formData.email,
                    token: data.token,
                    isAdmin: data.isAdmin
                };

                localStorage.setItem('userInfo', JSON.stringify(userData));
                login(userData);

                // Redirect based on user role
                if (data.isAdmin) {
                    navigate('/admin-dashboard');
                } else {
                    navigate('/profile');
                }
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError(
                err.response?.data?.message || 
                'Unable to connect to server. Please try again.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <Navbar />
            <div className="background">
                {[...Array(10)].map((_, index) => (
                    <div key={index} className={`cube cube-${index + 1}`}></div>
                ))}
            </div>
            <div className="login-box">
                <div className="login-icon">&#x2699;</div>
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input-field"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input-field"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button 
                        type="submit" 
                        className="submit-button" 
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'LOGIN'}
                    </button>
                </form>
                <p className="signup-link">
                    New user? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;