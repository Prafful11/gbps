import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Loader2, 
  CheckCircle,
  School,
  BookOpen,
  Github,
  Twitter,
  Facebook
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      navigate('/student-portal');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Success",
            description: "Logged in successfully!",
          });
          navigate('/student-portal');
        }
      } else {
        const { error } = await signUp(email, password, fullName);
        if (error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Success",
            description: "Please check your email to verify your account.",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      title: "Coming Soon",
      description: `${provider} login will be available soon!`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden">
        {/* Left Side - Decorative Panel */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-school-blue to-indigo-900 p-8 text-white md:w-2/5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-white/20 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Gyan Bharti</h3>
                <p className="text-blue-200 text-sm">Public School</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">
              {isLogin ? 'Welcome Back!' : 'Join Our Community'}
            </h2>
            
            <p className="text-blue-100 mb-8">
              {isLogin 
                ? "Sign in to access your student portal, check grades, assignments, and stay connected with teachers and peers."
                : "Create an account to get started with your educational journey at Gyan Bharti Public School."}
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-sm">
              <CheckCircle className="h-5 w-5 text-emerald-300" />
              <span>Access to digital learning resources</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <CheckCircle className="h-5 w-5 text-emerald-300" />
              <span>Stay updated with school announcements</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <CheckCircle className="h-5 w-5 text-emerald-300" />
              <span>Connect with teachers and classmates</span>
            </div>
          </div>
        </motion.div>
        
        {/* Right Side - Auth Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 md:p-12 md:w-3/5"
        >
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {isLogin ? 'Sign in to your account' : 'Create your account'}
            </h2>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required={!isLogin}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="appearance-none relative block w-full px-3 py-3 pl-12 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 text-base transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                    <User className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
                  </div>
                </motion.div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-3 pl-12 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 text-base transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                  <Mail className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete={isLogin ? "current-password" : "new-password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-3 pl-12 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 text-base transition-colors duration-200"
                    placeholder="Enter your password"
                  />
                  <Lock className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
                  <button 
                    type="button" 
                    onClick={togglePasswordVisibility}
                    className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-end">
                  <button
                    type="button"
                    className="text-sm text-emerald-600 hover:text-emerald-500 font-medium"
                  >
                    Forgot your password?
                  </button>
                </div>
              )}

              <div>
                <Button
                  type="submit"
                  className={cn(
                    "group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-lg text-white",
                    "bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500",
                    "transition-all duration-200 ease-in-out",
                    loading && "opacity-80"
                  )}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Please wait...
                    </>
                  ) : (
                    <>
                      {isLogin ? 'Sign in' : 'Sign up'}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Google')}
                  className="py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 flex items-center justify-center"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Facebook')}
                  className="py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 flex items-center justify-center"
                >
                  <Facebook className="h-5 w-5 text-blue-600" />
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Twitter')}
                  className="py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 flex items-center justify-center"
                >
                  <Twitter className="h-5 w-5 text-blue-400" />
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-emerald-600 hover:text-emerald-500 text-base font-medium inline-flex items-center"
              >
                {isLogin 
                  ? "Don't have an account? Sign up" 
                  : "Already have an account? Sign in"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
