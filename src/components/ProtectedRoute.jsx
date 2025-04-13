// src/components/ProtectedRoute.jsx
import { Navigate, Outlet, useLocation } from 'react-router-dom';

// Fake auth check: you should replace this with your real auth logic
const getUser = () => {
  const user = JSON.parse(localStorage.getItem('user')); // ex: { role: 'client' }
  return user;
};

const ProtectedRoute = () => {
  const location = useLocation();
  const user = getUser();

  // Not logged in
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  // Role-based access
  if (location.pathname === "/Client" && user.role !== "client") {
    return <Navigate to="/" replace />;
  }

  if (location.pathname === "/Company" && user.role !== "company") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
