// import React, { useState,useEffect} from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./context/Authcontext";
// import Navbar from "./Navbar";
// import "./Profile.css";
// import axios from "axios";

// const Profile = () => {
//   // const [user, setUser] = useState(null);
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [passwords, setPasswords] = useState({
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };


//   // useEffect(() => {
//   //   const fetchUserProfile = async () => {
//   //     try {
//   //       const token = localStorage.getItem("userToken");
//   //       const { data } = await axios.get("/api/profile", {
//   //         headers: { Authorization: `Bearer ${token}` },
//   //       });
//   //       setUser(data);
//   //     } catch (error) {
//   //       console.error("Failed to fetch user profile:", error);
//   //     }
//   //   };

//   //   fetchUserProfile();
//   // }, []);

//   const registeredEvents = [
//     {
//       name: "T-Shirt & Lunch",
//       paymentStatus: "Paid",
//       utr: "568946789012",
//     },
//     {
//       name: "Workshop",
//       paymentStatus: "Pending",
//       utr: "",
//     },
//   ];

//   const handleUpdate = async () => {
//     if (!passwords.newPassword || !passwords.confirmPassword) {
//         alert("Please fill in both password fields");
//         return;
//     }

//     if (passwords.newPassword !== passwords.confirmPassword) {
//         alert("Passwords don't match!");
//         return;
//     }

//     if (passwords.newPassword.length < 6) {
//         alert("Password must be at least 6 characters long");
//         return;
//     }

//     try {
//         const userInfo = localStorage.getItem('userInfo');
//         if (!userInfo) {
//             throw new Error('No authentication information found');
//         }

//         const { token } = JSON.parse(userInfo);
        
//         const response = await axios.put('http://localhost:5000/api/users/update-password', 
//             { newPassword: passwords.newPassword },
//             {
//                 headers: { 
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'application/json'
//                 }
//             }
//         );

//         if (response.data.success) {
//             alert('Password updated successfully!');
//             setPasswords({ newPassword: "", confirmPassword: "" });
//         } else {
//             throw new Error(response.data.message || 'Failed to update password');
//         }
//     } catch (err) {
//         console.error("Password update failed:", err);
//         if (err.response?.status === 401) {
//             logout();
//             navigate('/login');
//             return;
//         }
//         alert(err.response?.data?.message || err.message || "Failed to update password");
//     }
// };

//   return (
//     <div className="profile-container">
//       <Navbar />
//       <div className="profile-content">
//         <h1>My Profile</h1>
//         <p>
//           <span className="profile-label">Name:</span> {user?.name}
//         </p>
//         <p>
//           <span className="profile-label">Email:</span> {user?.email}
//         </p>
//         <p>
//           <span className="profile-label">Roll No:</span> {user?.rollNo}
//         </p>

//         <div className="password-section">
//           <div className="password-inputs">
//             <input
//               type="password"
//               placeholder="New Password"
//               value={passwords.newPassword}
//               onChange={(e) =>
//                 setPasswords({ ...passwords, newPassword: e.target.value })
//               }
//               aria-label="New Password"
//             />
//             <input
//               type="password"
//               placeholder="Confirm New Password"
//               value={passwords.confirmPassword}
//               onChange={(e) =>
//                 setPasswords({ ...passwords, confirmPassword: e.target.value })
//               }
//               aria-label="Confirm New Password"
//             />
//           </div>
//           <div className="buttons-container">
//             <button type="button" className="update-btn" onClick={handleUpdate}>
//               Update
//             </button>
//             <button type="button" className="logout-btn" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         </div>

//         {/* <p>Payment Status: {user.paymentStatus || "Pending"}</p> */}
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/Authcontext";
import Navbar from "./Navbar";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(() => {
    const userInfo = localStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo) : null;
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userInfo = localStorage.getItem('userInfo');
        if (!userInfo) {
          navigate('/login');
          return;
        }

        const parsedUserInfo = JSON.parse(userInfo);
        
        // Set initial data
        setUserData(parsedUserInfo);

        // Configure axios
        axios.defaults.baseURL = 'http://localhost:5000';
        axios.defaults.headers.common['Authorization'] = `Bearer ${parsedUserInfo.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';

        const response = await axios.get('/api/users/me');

        if (response.data.success) {
          const updatedUserData = {
            ...parsedUserInfo,
            ...response.data.user,
          };
          
          setUserData(updatedUserData);
          localStorage.setItem('userInfo', JSON.stringify(updatedUserData));
          setError(null);
        } else {
          throw new Error(response.data.message || 'Failed to fetch user data');
        }
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        if (err.response?.status === 401) {
          logout();
          navigate('/login');
          return;
        }
        setError("Unable to fetch latest profile data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate, logout]);

  const handleUpdate = async () => {
    if (!passwords.newPassword || !passwords.confirmPassword) {
      alert("Please fill in both password fields");
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (passwords.newPassword.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    try {
      const response = await axios.put('/api/users/update-password', {
        newPassword: passwords.newPassword
      });

      if (response.data.success) {
        alert('Password updated successfully!');
        setPasswords({ newPassword: "", confirmPassword: "" });
      } else {
        throw new Error(response.data.message || 'Failed to update password');
      }
    } catch (err) {
      console.error("Password update failed:", err);
      if (err.response?.status === 401) {
        logout();
        navigate('/login');
        return;
      }
      alert(err.response?.data?.message || err.message || "Failed to update password");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="profile-container">
        <Navbar />
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-content">
        <h1>My Profile</h1>
        {error && <div className="error-message">{error}</div>}
        <div className="profile-info">
          <p>
            <span className="profile-label">Name:</span> 
            {/* {userData?.name || 'Not Available'} */}
            {userData?.name || 'Not Available'}
          </p>
          <p>
            <span className="profile-label">Email:</span> 
            {userData?.email || 'Not Available'}
          </p>
          <p>
            <span className="profile-label">Roll No:</span> 
            {userData?.rollNo || 'Not Available'}
          </p>
        </div>

        <div className="password-section">
          <h2>Change Password</h2>
          <div className="password-inputs">
            <input
              type="password"
              placeholder="New Password"
              value={passwords.newPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, newPassword: e.target.value })
              }
              aria-label="New Password"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={passwords.confirmPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, confirmPassword: e.target.value })
              }
              aria-label="Confirm New Password"
            />
          </div>
          <div className="buttons-container">
            <button 
              type="button" 
              className="update-btn"
              onClick={handleUpdate}
              disabled={!passwords.newPassword || !passwords.confirmPassword}
            >
              Update Password
            </button>
            <button 
              type="button" 
              className="logout-btn" 
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
