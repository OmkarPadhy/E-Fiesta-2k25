import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './home';
import Technical from './Events/technical';
import Sports from './Events/sports';
import NonTech from './Events/nontech';
import Cultural from './Events/cultural';
import Gallery from './pages/gallery';
import TShirt from './pages/t-shirt';
import Developer from './pages/developer'

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />; // redirect back to Home instead of /login
  }
  return children;
};

const MaintenanceScreen = () => {
  return (
    <div style={{ minHeight:"100vh", display:"flex", justifyContent:"center", alignItems:"center",
    background:"linear-gradient(135deg,#071025,#0b2a3a)", color:"#fff", textAlign:"center" }}>
      <div style={{ padding:"35px 40px", maxWidth:"650px", background:"rgba(255,255,255,0.06)",
      borderRadius:"18px", border:"1px solid rgba(255,255,255,0.12)", backdropFilter:"blur(10px)" }}>
        <h1 style={{ fontSize:"2.4rem", fontWeight:"800", background:"linear-gradient(90deg,#00F0FF,#b94cf0)",
        WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
          E-Fiesta Website Update
        </h1>
        <p style={{ opacity:0.9, fontSize:"1.15rem", marginBottom:"20px" }}>
          We’re refreshing our website with new features and fresher content.
        </p>
        <small>— Department of ECE • E-Fiesta 2K25</small>
      </div>
    </div>
  );
};
function App() {

  const maintenanceMode = true; 

  if (maintenanceMode) {
    return <MaintenanceScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/technical" element={<Technical />} />
        <Route path="/events/sports" element={<Sports />} />
        <Route path="/events/nontech" element={<NonTech />} />
        <Route path="/events/cultural" element={<Cultural />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/t-shirt" element={<TShirt />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>
    </Router>
  );
}

export default App;
