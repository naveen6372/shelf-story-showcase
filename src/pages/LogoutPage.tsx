
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const LogoutPage = () => {
  const { logout } = useAuth();
  const { toast } = useToast();
  
  useEffect(() => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  }, [logout, toast]);

  return <Navigate to="/" replace />;
};

export default LogoutPage;
