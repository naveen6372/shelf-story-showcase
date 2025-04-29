
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
  displayName?: string;
  bio?: string;
  portfolioTheme?: string;
  socialLinks?: {
    website?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  useEffect(() => {
    // Check local storage for user data
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to parse stored user data:', error);
        logout();
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    // In a real app, this would make an API call to authenticate
    const username = email.split('@')[0];
    
    // Mock user data with portfolio information
    const mockUser = {
      id: '123',
      username: username,
      email: email,
      displayName: username.charAt(0).toUpperCase() + username.slice(1),
      bio: 'Welcome to my portfolio! I am a creative professional showcasing my work.',
      portfolioTheme: 'minimal',
      socialLinks: {
        twitter: username,
        github: username,
      }
    };
    
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const register = async (username: string, email: string, password: string) => {
    // In a real app, this would make an API call to register a new user
    // Mock user data with portfolio information
    const mockUser = {
      id: '123',
      username: username,
      email: email,
      displayName: username.charAt(0).toUpperCase() + username.slice(1),
      bio: 'Welcome to my portfolio! I am a creative professional showcasing my work.',
      portfolioTheme: 'minimal',
      socialLinks: {
        twitter: username,
        github: username,
      }
    };
    
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
