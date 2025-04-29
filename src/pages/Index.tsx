import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { user, isAuthenticated } = useAuth();
  
  // If user is authenticated, redirect them to their portfolio
  if (isAuthenticated && user && user.username) {
    return <Navigate to={`/${user.username}`} replace />;
  }
  
  // Otherwise redirect to the homepage
  return <Navigate to="/" replace />;
};

export default Index;
