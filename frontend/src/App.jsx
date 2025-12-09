// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Home from './home';
import Technical from './Events/technical';
import Sports from './Events/sports';
import NonTech from './Events/nontech';
import Cultural from './Events/cultural';
import Gallery from './pages/gallery';
import TShirt from './pages/t-shirt';
import Developer from './pages/developer';
import PostFest from './PostFest'; // the new post-fest / announcement page

// Protected Route Component (keeps your existing behavior)
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />; // redirect back to Home
  }
  return children;
};

// Toggle this to show post-fest announcement site-wide (true) or the full site (false)
const SHOW_POSTFEST = true;

function App() {
  return (
    <Router>
      <Routes>
        {SHOW_POSTFEST ? (
          // When enabled, show the PostFest page for every path
          <Route path="*" element={<PostFest />} />
        ) : (
          // Normal site routes
          <>
            <Route path="/" element={<Home />} />
            <Route path="/events/technical" element={<Technical />} />
            <Route path="/events/sports" element={<Sports />} />
            <Route path="/events/nontech" element={<NonTech />} />
            <Route path="/events/cultural" element={<Cultural />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/t-shirt" element={<TShirt />} />
            <Route path="/developer" element={<Developer />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
