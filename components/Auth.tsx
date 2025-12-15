import React from 'react';
import { Screen } from '../types';
import { Recycle, Mail, Lock, Eye, EyeOff, User, RefreshCw, ArrowLeft, KeyRound } from 'lucide-react';

interface AuthProps {
  onNavigate: (screen: Screen) => void;
}

type AuthView = 'login' | 'signup' | 'forgot';

export const Auth: React.FC<AuthProps> = ({ onNavigate }) => {
  const [view, setView] = React.useState<AuthView>('login');
  const [resetEmail, setResetEmail] = React.useState('');
  const [isResetSent, setIsResetSent] = React.useState(false);

  const handleGoogleSignIn = () => {
    // In a real application, this would initiate the OAuth 2.0 flow
    console.log("Initiating Google Sign-In flow...");
    // Simulating redirect or successful auth callback
    setTimeout(() => onNavigate('dashboard'), 800);
  };

  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log(`Sending password reset link to ${resetEmail}`);
    setIsResetSent(true);
  };

  return (
    <div className="relative w-full h-screen flex overflow-hidden">
      {/* Left Panel: Image */}
      <div className="hidden lg:flex lg:w-1/2 relative h-full flex-col p-4">
        <div className="h-full w-full rounded-3xl overflow-hidden relative flex flex-col justify-end p-10 group border border-white/10 shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAY2qp16BPwQVlfEpT3hu4-8dDYl8O5coVKx8QFhT5yJILVqIEGuoQvbQ3HQoky3lNnHmoijoyfl7TOMuRSrdYdKbX2_3e4kr4gOvInxD_zInIT8hY57TF788C99X77Y1_9PsFUzPlQyXCczyu1NGEJGo66LPxhO6ZFfUdW2aJA29lXpChYid6fkwN9PtJRG_5H8tfD7E8Hr1OadbPIjOO_DVSxiwg2O17PG8x9-g3dSlEYgFyFRMNYhaZ9gkfL5Kcr84PGWVqGhCg")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 flex flex-col gap-4 max-w-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background-dark">
                <Recycle size={24} />
              </div>
              <p className="text-white text-lg font-medium tracking-wide">EcoCycle Rwanda</p>
            </div>
            <h2 className="text-white text-5xl font-bold leading-tight tracking-tight">
                Reviving Tech, <br />
                <span className="text-primary">Restoring Nature</span>
            </h2>
            <p className="text-gray-200 text-lg font-normal leading-relaxed max-w-md opacity-90">
                Join Rwanda's leading e-waste management platform and be part of the green revolution.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel: Form */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-6 sm:p-12 relative overflow-y-auto">
         {/* Background pattern for mobile */}
         <div className="absolute inset-0 opacity-5 pointer-events-none lg:hidden" style={{ backgroundImage: 'radial-gradient(#2bee79 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

         <div className="w-full max-w-[440px] z-10 flex flex-col gap-6 animate-screen-enter" key={view}>
            <div className="w-full lg:hidden flex items-center gap-2 mb-2 justify-center">
                <Recycle className="text-primary" size={32} />
                <span className="text-xl font-bold text-white">EcoCycle</span>
            </div>

            {/* Forgot Password View */}
            {view === 'forgot' ? (
                <>
                   <div className="text-center lg:text-left space-y-2">
                        <button onClick={() => { setView('login'); setIsResetSent(false); }} className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-2">
                            <ArrowLeft size={18} />
                            <span className="text-sm font-bold">Back to Login</span>
                        </button>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Forgot Password?</h1>
                        <p className="text-text-muted text-base">
                            {isResetSent 
                                ? "We've sent a password reset link to your email." 
                                : "No worries, we'll send you reset instructions."}
                        </p>
                    </div>

                    {!isResetSent ? (
                        <form className="flex flex-col gap-5" onSubmit={handleForgotPasswordSubmit}>
                            <div className="space-y-2">
                                <label className="text-white text-sm font-medium pl-2">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                                    <input 
                                        type="email" 
                                        required
                                        value={resetEmail}
                                        onChange={(e) => setResetEmail(e.target.value)}
                                        placeholder="name@example.com"
                                        className="w-full h-14 bg-surface-dark/50 backdrop-blur-sm border border-border-green focus:border-primary focus:ring-1 focus:ring-primary rounded-xl pl-12 pr-4 text-white placeholder-text-muted transition-colors outline-none"
                                    />
                                </div>
                            </div>
                            <button className="w-full h-14 bg-primary hover:bg-opacity-90 active:scale-[0.98] transition-all rounded-full flex items-center justify-center text-background-dark text-lg font-bold tracking-wide mt-2 shadow-[0_0_20px_rgba(43,238,121,0.3)] hover:shadow-[0_0_30px_rgba(43,238,121,0.5)]">
                                Send Reset Link
                            </button>
                        </form>
                    ) : (
                        <div className="flex flex-col gap-4 bg-surface-dark/80 backdrop-blur-sm border border-border-green rounded-2xl p-6 text-center shadow-xl">
                            <div className="mx-auto w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                                <Mail size={24} />
                            </div>
                            <p className="text-white">
                                Check your email <strong>{resetEmail}</strong> for instructions to reset your password.
                            </p>
                            <button 
                                onClick={() => setView('login')}
                                className="w-full h-12 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-colors"
                            >
                                Skip, I'll confirm later
                            </button>
                            <button 
                                onClick={() => setIsResetSent(false)}
                                className="text-sm text-text-muted hover:text-white"
                            >
                                Didn't receive the email? Click to resend
                            </button>
                        </div>
                    )}
                </>
            ) : (
                /* Login / Signup View */
                <>
                    <div className="text-center lg:text-left space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Welcome</h1>
                        <p className="text-text-muted text-base">Please manage your account access below.</p>
                    </div>

                    {/* Toggle Switch */}
                    <div className="flex p-1 bg-surface-dark/50 backdrop-blur-sm rounded-2xl border border-border-green">
                        <button 
                            onClick={() => setView('login')}
                            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${view === 'login' ? 'bg-primary text-background-dark shadow-lg' : 'text-text-muted hover:text-white'}`}
                        >
                            Login
                        </button>
                        <button 
                            onClick={() => setView('signup')}
                            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${view === 'signup' ? 'bg-primary text-background-dark shadow-lg' : 'text-text-muted hover:text-white'}`}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Form */}
                    <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
                        {view === 'signup' && (
                            <div className="space-y-2">
                                <label className="text-white text-sm font-medium pl-2">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                                    <input 
                                        type="text" 
                                        placeholder="John Doe"
                                        className="w-full h-14 bg-surface-dark/50 backdrop-blur-sm border border-border-green focus:border-primary focus:ring-1 focus:ring-primary rounded-xl pl-12 pr-4 text-white placeholder-text-muted transition-colors outline-none"
                                    />
                                </div>
                            </div>
                        )}
                        
                        <div className="space-y-2">
                            <label className="text-white text-sm font-medium pl-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                                <input 
                                    type="email" 
                                    placeholder="name@example.com"
                                    className="w-full h-14 bg-surface-dark/50 backdrop-blur-sm border border-border-green focus:border-primary focus:ring-1 focus:ring-primary rounded-xl pl-12 pr-4 text-white placeholder-text-muted transition-colors outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-white text-sm font-medium pl-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                                <input 
                                    type="password" 
                                    placeholder="Enter your password"
                                    className="w-full h-14 bg-surface-dark/50 backdrop-blur-sm border border-border-green focus:border-primary focus:ring-1 focus:ring-primary rounded-xl pl-12 pr-12 text-white placeholder-text-muted transition-colors outline-none"
                                />
                                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary transition-colors">
                                    <Eye size={20} />
                                </button>
                            </div>
                        </div>

                        {view === 'signup' && (
                            <div className="space-y-2">
                                <label className="text-white text-sm font-medium pl-2">Confirm Password</label>
                                <div className="relative">
                                    <RefreshCw className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                                    <input 
                                        type="password" 
                                        placeholder="Repeat password"
                                        className="w-full h-14 bg-surface-dark/50 backdrop-blur-sm border border-border-green focus:border-primary focus:ring-1 focus:ring-primary rounded-xl pl-12 pr-12 text-white placeholder-text-muted transition-colors outline-none"
                                    />
                                </div>
                            </div>
                        )}

                        {view === 'login' && (
                            <div className="flex justify-end">
                                <button 
                                    type="button" 
                                    onClick={() => setView('forgot')}
                                    className="text-sm font-medium text-text-muted hover:text-primary hover:underline underline-offset-4 decoration-primary transition-colors"
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                        <button className="w-full h-14 bg-primary hover:bg-opacity-90 active:scale-[0.98] transition-all rounded-full flex items-center justify-center text-background-dark text-lg font-bold tracking-wide mt-2 shadow-[0_0_20px_rgba(43,238,121,0.3)] hover:shadow-[0_0_30px_rgba(43,238,121,0.5)]">
                            {view === 'login' ? 'Login' : 'Create Account'}
                        </button>
                    </form>

                    <div className="relative py-2 flex items-center justify-center">
                        <div className="h-px bg-border-green w-full"></div>
                        <span className="absolute bg-background-dark px-3 text-sm text-text-muted font-medium">Or continue with</span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button 
                            onClick={handleGoogleSignIn}
                            className="w-full h-12 bg-surface-dark/50 backdrop-blur-sm border border-border-green hover:bg-border-green/40 active:scale-[0.98] transition-all rounded-full flex items-center justify-center text-white text-base font-bold tracking-wide gap-3"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                            </svg>
                            Google
                        </button>

                        <div className="grid grid-cols-2 gap-3">
                            <button className="w-full h-12 bg-surface-dark/50 backdrop-blur-sm border border-border-green hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white active:scale-[0.98] transition-all rounded-full flex items-center justify-center text-white text-base font-bold tracking-wide gap-3 group">
                                <svg className="w-5 h-5 fill-current text-[#1877F2] group-hover:text-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.79-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                                Facebook
                            </button>
                            <button className="w-full h-12 bg-surface-dark/50 backdrop-blur-sm border border-border-green hover:bg-white hover:border-white hover:text-black active:scale-[0.98] transition-all rounded-full flex items-center justify-center text-white text-base font-bold tracking-wide gap-3 group">
                                <svg className="w-5 h-5 fill-current text-white group-hover:text-black transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78 1.18-.19 2.31-.89 3.51-.84 1.54.06 2.7.79 3.44 1.92-3.03 1.8-2.5 5.15.55 6.34-.6 1.54-1.54 3.08-2.58 4.77zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                                </svg>
                                Apple
                            </button>
                        </div>
                    </div>
                </>
            )}
         </div>
      </div>
    </div>
  );
};