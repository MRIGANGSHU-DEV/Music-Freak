import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null; // or a loading spinner if you want

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};


export default ProtectedRoute;
