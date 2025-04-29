
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const username = user?.username || '';

  return (
    <nav className="bg-background border-b border-border py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold text-primary">
          ProjectShelf
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/explore" className="text-foreground hover:text-primary transition-colors">
          Explore
        </Link>
        <Link to="/features" className="text-foreground hover:text-primary transition-colors">
          Features
        </Link>
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
            {username && (
              <Link to={`/${username}`} className="text-foreground hover:text-primary transition-colors">
                My Portfolio
              </Link>
            )}
            <Button variant="outline" asChild>
              <Link to="/logout">Log out</Link>
            </Button>
          </>
        ) : (
          <>
            <Button variant="outline" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Sign up</Link>
            </Button>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 left-0 bg-background border-b border-border py-4 px-6 z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/explore" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore
            </Link>
            <Link 
              to="/features" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                {username && (
                  <Link 
                    to={`/${username}`} 
                    className="text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    My Portfolio
                  </Link>
                )}
                <Button variant="outline" asChild>
                  <Link to="/logout" onClick={() => setMobileMenuOpen(false)}>Log out</Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Log in</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link to="/register" onClick={() => setMobileMenuOpen(false)}>Sign up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
