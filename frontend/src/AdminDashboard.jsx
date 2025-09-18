import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const isAdmin = localStorage.getItem('isAdmin');

    if (!token || !isAdmin) {
      navigate('/admin');
      return;
    }

    fetchUsers();
  }, [navigate]);

// useEffect(() => {
//     const token = localStorage.getItem('adminToken');
//     const isAdmin = localStorage.getItem('isAdmin');
//     const storedUser = localStorage.getItem('adminUser');

//     if (!token || !isAdmin || !storedUser) {
//       navigate('/admin');
//       return;
//     }

//     try {
//       setAdminUser(JSON.parse(storedUser));
//       fetchUsers();
//     } catch (err) {
//       console.error('Error parsing admin user:', err);
//       navigate('/admin');
//     }
//   }, [navigate]);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch('http://localhost:5000/api/users/all', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      if (response.status === 401) {
        // Clear invalid credentials
        localStorage.removeItem('adminToken');
        localStorage.removeItem('isAdmin');
        navigate('/admin');
        return;
      }

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Invalid data format received from server');
      }

      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('isAdmin');
    navigate('/admin');
  };

// const handleLogout = () => {
//     localStorage.removeItem('adminToken');
//     localStorage.removeItem('isAdmin');
//     localStorage.removeItem('adminUser');
//     navigate('/admin');
//   };

  if (loading) {
    return (
      <div className="admin-dashboard">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-dashboard">
        <div className="error">{error}</div>
        <button onClick={handleLogout} className="logout-btn">Back to Login</button>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      <div className="users-list">
        <h2>Registered Users</h2>
        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Roll No</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.rollNo}</td>
                  <td>{user.paymentStatus || 'Pending'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;