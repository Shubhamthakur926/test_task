import { useNavigate, Link } from 'react-router-dom';
import { Label } from '../../component/label';
import { Button } from '../../component/ui/button';
import { Input } from '../../component/ui/input';

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here

    // After successful signup, navigate to dashboard
    navigate('/dashboard');
  };

  const AppleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );

  const FacebookIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );

  const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );

  const TwitterIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );

  return (
    <div className="h-screen bg-black flex items-center justify-center p-0 overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50"></div>
      <div className="fixed top-1/3 left-1/3 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="fixed bottom-1/3 right-1/3 w-32 h-4 bg-green-600 rounded opacity-20 rotate-[-15deg]"></div>

      <div className="relative bg-black/80 border border-gray-800 rounded-3xl p-4 md:p-8 w-full h-full max-w-none mx-0 shadow-2xl backdrop-blur-md grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch">
        <div className="relative flex flex-col justify-between space-y-4 md:space-y-6 md:pr-8 overflow-y-auto border border-gray-800 rounded-2xl p-4 md:p-6">
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">PZ</span>
            </div>

            <h2 className="text-white font-bold text-xl tracking-wide">PICKLEZONE</h2>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4 mt-4">
            <div className="relative w-24 h-40 bg-transparent transform rotate-[-15deg]">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-20 bg-green-700 rounded-l-full rounded-r-full"></div>
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-20 h-10 bg-green-500 rounded-lg shadow-lg border border-green-600"></div>
              <div className="absolute top-2 right-2 w-5 h-5 bg-yellow-400 rounded-full shadow-md animate-bounce"></div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-green-500/30 rounded opacity-70"></div>
            </div>
          </div>

          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-xl font-semibold text-white leading-tight">Connect with Community Play & Earn Rewards</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Join global network of players. Improve your skills and earn exclusive rewards while playing the game you love
            </p>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6 pt-2 md:pt-0 overflow-y-auto">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white text-center md:text-left">Get Started Now!</h1>
            <p className="text-gray-400 text-sm text-center md:text-left">Welcome to PickleZone, create account to start your experience</p>
          </div>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="username" className="text-white text-sm block mb-1.5">
                Username
              </Label>
              <Input id="username" type="text" placeholder="Username" className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:ring-green-500 h-10 rounded-lg" />
            </div>

            <div>
              <Label htmlFor="email" className="text-white text-sm block mb-1.5">
                Email
              </Label>
              <Input id="email" type="email" placeholder="example@gmail.com" className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:ring-green-500 h-10 rounded-lg" />
            </div>

            <div>
              <Label htmlFor="phone" className="text-white text-sm block mb-1.5">
                Phone Number
              </Label>
              <div className="flex">
                <select className="bg-gray-900/50 border-r-0 border-gray-700 text-white rounded-l-lg px-2 h-10 focus:ring-green-500 appearance-none">
                  <option>+1</option>
                  <option>+7</option>
                  <option>+44</option>
                </select>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="border-l-0 rounded-l-none bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:ring-green-500 h-10 rounded-r-lg flex-1"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <Label htmlFor="password" className="text-white text-sm block mb-1.5">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:ring-green-500 h-10 rounded-lg w-full"
                />
              </div>

              <div className="flex-1">
                <Label htmlFor="confirm-password" className="text-white text-sm block mb-1.5">
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm Password"
                  className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:ring-green-500 h-10 rounded-lg w-full"
                />
              </div>
            </div>

            <div className="flex items-start space-x-3 pt-1">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 border-gray-700 text-green-500 focus:ring-green-500 rounded"
              />
              <label htmlFor="terms" className="text-xs text-gray-400 leading-relaxed">
                I read and agree to App's{" "}
                <a href="#" className="text-green-500 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-500 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-700 text-black font-semibold py-2.5 rounded-lg h-11 shadow-lg border-0">
              Signup
            </Button>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-700"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-black px-3 text-gray-400">Or Signup with</span>
            </div>
          </div>

          <div className="flex space-x-3 justify-center">
            <div
              className="w-10 h-10 border-gray-700 hover:bg-gray-800 text-white rounded-full flex items-center justify-center"
            >
              <AppleIcon />
            </div>

            <div
              className="w-10 h-10 border-gray-700 hover:bg-blue-600 text-white rounded-full flex items-center justify-center"
            >
              <FacebookIcon />
            </div>

            <div
              className="w-10 h-10 border-gray-700 hover:bg-gray-200 text-white rounded-full flex items-center justify-center"
            >
              <GoogleIcon />
            </div>

            <div
              className="w-10 h-10 border-gray-700 hover:bg-blue-500 text-white rounded-full flex items-center justify-center"
            >
              <TwitterIcon />
            </div>
          </div>

          <p className="text-center text-xs text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-green-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;