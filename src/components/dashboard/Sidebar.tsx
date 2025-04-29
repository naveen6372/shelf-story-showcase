
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

export const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuth();

  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: 'M4 6h16M4 12h16M4 18h7' },
    { name: 'Case Studies', href: '/dashboard/case-studies', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { name: 'Theme', href: '/dashboard/theme', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485A4 4 0 017 21.343z' },
    { name: 'Analytics', href: '/dashboard/analytics', icon: 'M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2' },
    { name: 'Settings', href: '/dashboard/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  ];

  return (
    <aside className="w-64 bg-background border-r border-border hidden md:block">
      <div className="p-6">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-lg font-bold text-primary">
            ProjectShelf
          </Link>
        </div>
        
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">Signed in as</p>
          <p className="font-medium">{user?.username}</p>
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                item.href === location.pathname
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-accent/10',
                'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
              )}
            >
              <svg
                className={cn(
                  item.href === location.pathname
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground group-hover:text-foreground',
                  'mr-3 h-5 w-5'
                )}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
              </svg>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-10 pt-6 border-t border-border">
          <Link
            to={`/${user?.username}`}
            className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-foreground hover:bg-accent/10"
          >
            <svg
              className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-foreground"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            View Portfolio
          </Link>
        </div>
      </div>
    </aside>
  );
};
