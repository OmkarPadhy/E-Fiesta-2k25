import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/Authcontext';
import './App.css';
import Home from './home';
// import Login from './login';   // Hidden for now
// import Signup from './Signup'; // Hidden for now
import Profile from './profile';
import Technical from './Events/technical';
import Sports from './Events/sports';
import NonTech from './Events/nontech';
import Cultural from './Events/cultural';
import Gallery from './pages/gallery';
import TShirt from './pages/t-shirt';
import Developer from './pages/developer'
// import AdminLogin from './AdminLogin';     // Hidden for now (if unused)
// import AdminDashboard from './AdminDashboard'; // Hidden for now (if unused)

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />; // redirect back to Home instead of /login
  }
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Hidden for now */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/admin" element={<AdminLogin />} /> */}
          {/* <Route path="/admind" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } /> */}

          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          
          <Route path="/events/technical" element={<Technical />} />
          <Route path="/events/sports" element={<Sports />} />
          <Route path="/events/nontech" element={<NonTech />} />
          <Route path="/events/cultural" element={<Cultural />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/t-shirt" element={<TShirt />} />
          <Route path="/developer" element={<Developer />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
