import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email.trim(),
          password: password 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      if (data.isAdmin) {
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('isAdmin', 'true');
        navigate('/admind');
      } else {
        setError('Not authorized as admin');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  // ...existing code...

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   setError('');

//   try {
//     const response = await fetch('http://localhost:5000/api/users/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ 
//         email: email.trim(),
//         password: password 
//       }),
//       credentials: 'include'
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || 'Login failed');
//     }

//     if (data.isAdmin) {
//       // Store complete user info
//       localStorage.setItem('adminToken', data.token);
//       localStorage.setItem('isAdmin', 'true');
//       localStorage.setItem('adminUser', JSON.stringify({
//         id: data.user.id,
//         name: data.user.name,
//         email: data.user.email,
//         role: 'admin'
//       }));
//       navigate('/admind');
//     } else {
//       setError('Not authorized as admin');
//     }
//   } catch (err) {
//     console.error('Login error:', err);
//     setError(err.message || 'Failed to login');
//   } finally {
//     setLoading(false);
//   }
// };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2>Admin Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
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
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;