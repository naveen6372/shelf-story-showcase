
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

const NotFound = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={isAuthenticated} username={user?.username} />
      
      <main className="flex-1 flex items-center justify-center py-12 px-6">
        <div className="max-w-md text-center">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
