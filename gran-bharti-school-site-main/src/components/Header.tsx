import React, { useState } from 'react';
import { Menu, X, GraduationCap, LogOut, User, UserCircle, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Admissions', href: '/admission' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  const handleContactClick = () => {
    navigate('/contact');
  };
  
  const handleAdmissionClick = () => {
    navigate('/admission');
  };

  const handlePortalClick = () => {
    navigate('/student-portal');
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user || !user.user_metadata?.full_name) return 'U';
    const nameParts = user.user_metadata.full_name.split(' ');
    if (nameParts.length >= 2) {
      return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
    }
    return nameParts[0][0].toUpperCase();
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-school-blue rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-school-blue">Gyan Bharti</h1>
              <p className="text-xs text-muted-foreground -mt-1">Public School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-school-blue transition-colors duration-200"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-school-blue transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            ))}
            {user && (
              <Link
                to="/student-portal"
                className="text-emerald-600 hover:text-emerald-700 transition-colors duration-200 font-medium flex items-center"
              >
                <BookOpen className="h-4 w-4 mr-1" />
                Student Portal
              </Link>
            )}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Avatar className="h-8 w-8 border-2 border-emerald-200 cursor-pointer" onClick={handlePortalClick}>
                    <AvatarFallback className="bg-emerald-600 text-white">{getUserInitials()}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-gray-700">
                    {user.user_metadata?.full_name || 'User'}
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleAuthAction}
                  className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 transition-all duration-200"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleAuthAction}
                  className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 transition-all duration-200"
                >
                  <UserCircle className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button 
                  size="sm" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-200" 
                  onClick={handleAdmissionClick}
                >
                  Apply Now
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="py-2 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="py-2 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              {user && (
                <Link
                  to="/student-portal"
                  className="py-2 px-4 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-md transition-colors duration-200 font-medium flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Student Portal
                </Link>
              )}
              <div className="flex flex-col space-y-2 pt-4">
                {user ? (
                  <>
                    <div className="px-4 py-2 flex items-center space-x-3">
                      <Avatar className="h-8 w-8 border-2 border-emerald-200">
                        <AvatarFallback className="bg-emerald-600 text-white">{getUserInitials()}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-gray-700">
                        {user.user_metadata?.full_name || 'User'}
                      </span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleAuthAction}
                      className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 transition-all duration-200"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleAuthAction}
                      className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 transition-all duration-200"
                    >
                      <UserCircle className="h-4 w-4 mr-2" />
                      Sign In
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-200" 
                      onClick={handleAdmissionClick}
                    >
                      Apply Now
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
