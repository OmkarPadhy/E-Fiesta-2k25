import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            // Get user data from localStorage with proper fallback
            const userData = localStorage.getItem('user');
            const adminData = localStorage.getItem('adminUser');
            
            if (userData) {
                setUser(JSON.parse(userData));
            } else if (adminData) {
                setUser(JSON.parse(adminData));
            }
        } catch (error) {
            console.error('Error parsing user data:', error);
            // Clear invalid data
            localStorage.removeItem('user');
            localStorage.removeItem('adminUser');
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const adminLogin = (adminData) => {
        setUser(adminData);
        localStorage.setItem('adminUser', JSON.stringify(adminData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('adminUser');
        localStorage.removeItem('adminToken');
        localStorage.removeItem('isAdmin');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, adminLogin, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;