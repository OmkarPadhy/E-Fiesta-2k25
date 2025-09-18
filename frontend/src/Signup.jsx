import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import './Signup.css';

const SignupForm = ({ onSubmit, loading, error }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rollNo: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            {error && <div className="error-message">{error}</div>}
            {['name', 'email', 'rollNo', 'password', 'confirmPassword'].map(field => (
                <input
                    key={field}
                    type={field.includes('password') ? 'password' : 'text'}
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                    className="input-field"
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    minLength={field.includes('password') ? 6 : undefined}
                />
            ))}
            <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Please wait...' : 'Sign Up'}
            </button>
        </form>
    );
};

const Signup = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (formData) => {
        if (!formData.email.endsWith('@giet.edu')) {
            setError('Only official emails with @giet.edu are allowed to register');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setError('');
        setLoading(true);

        try {
            const { data } = await axios.post('/api/users/register', {
                name: formData.name,
                email: formData.email,
                rollNo: formData.rollNo,
                password: formData.password
            });

            // Store the user's name in localStorage
            localStorage.setItem('userName', data.name);

            // Store the entire user info in localStorage (optional)
            localStorage.setItem('userInfo', JSON.stringify(data));

            // Redirect to the admin dashboard
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-container">
            <Navbar />
            <div className="background">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className={`cube cube-${i + 1}`} />
                ))}
            </div>
            <div className="signup-box">
                <h2>Create Account</h2>
                <SignupForm
                    onSubmit={handleSubmit}
                    loading={loading}
                    error={error}
                />
                <p className="signin-link">
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;