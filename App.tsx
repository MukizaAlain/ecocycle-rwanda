import React, { useState, useEffect } from 'react';
import { Landing } from './components/Landing';
import { Auth } from './components/Auth';
import { Dashboard } from './components/Dashboard';
import { SchedulePickup } from './components/SchedulePickup';
import { History } from './components/History';
import { Rewards } from './components/Rewards';
import { Profile } from './components/Profile';
import { Sidebar } from './components/Sidebar';
import { Screen } from './types';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  // Simple state-based routing for this demo
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [currentScreen]);

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleLogout = () => {
    // In a real app, clear tokens here
    setCurrentScreen('auth');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <Landing onNavigate={handleNavigate} />;
      case 'auth':
        return <Auth onNavigate={handleNavigate} />;
      case 'dashboard':
        return <Dashboard />;
      case 'schedule':
        return <SchedulePickup />;
      case 'history':
        return <History />;
      case 'rewards':
        return <Rewards />;
      case 'profile':
        return <Profile onLogout={handleLogout} />;
      default:
        return <Landing onNavigate={handleNavigate} />;
    }
  };

  // Global Background Component
  const AppBackground = () => (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      {/* Dark Overlay for readability - lighter to show the environment image */}
      <div className={`absolute inset-0 bg-background-dark/70 z-10 transition-opacity duration-500`} />
      {/* Environment Image */}
      <img 
        src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2641&auto=format&fit=crop" 
        alt="Eco Background" 
        className="w-full h-full object-cover"
      />
    </div>
  );

  const isAuthScreen = currentScreen === 'auth' || currentScreen === 'landing';

  if (isAuthScreen) {
    return (
        <div className="min-h-screen w-full relative font-display text-slate-900 dark:text-white">
            <AppBackground />
            <main className="min-h-screen w-full animate-screen-enter relative z-10" key={currentScreen}>
                {renderScreen()}
            </main>
        </div>
    );
  }

  return (
    <div className="flex h-screen w-full overflow-hidden text-slate-900 dark:text-white font-display relative">
      <AppBackground />
      
      {/* Sidebar - Desktop */}
      <div className="hidden lg:block w-72 shrink-0 h-full z-20">
         <Sidebar currentScreen={currentScreen} onNavigate={handleNavigate} onLogout={handleLogout} />
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-surface-darker/90 backdrop-blur-xl shadow-xl border-r border-white/10">
             <Sidebar currentScreen={currentScreen} onNavigate={handleNavigate} isMobile onLogout={handleLogout} />
             <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
             >
               <X size={24} />
             </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative z-10">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 flex items-center justify-between px-4 border-b border-white/10 bg-background-dark/50 backdrop-blur-md shrink-0 z-20">
          <div className="flex items-center gap-2">
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-white">
              <Menu size={24} />
            </button>
            <span className="text-white font-bold text-lg">EcoCycle</span>
          </div>
          <div className="size-8 rounded-full bg-cover bg-center border border-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDbK9lG4KyS8A-nxMCyaeUFty9DJ5gv_WN6U4fpgx846gRh2ciLdY8yo4Q1gbjhHOYdI8eXfKdsPZThrqiORhAudJPn-_ByXhY8kK9NBghSba8_IKqk_uSjLl6faKyLkUGctR3X3y6y5ShfrKkRPQfl2UpzaQtNxSa1hhsYa3RdsuL1Sf7ReTsCc3wjwEYHwLffLkvE-wscjPzt0VyGxiM7wtxjFAVe3IX_5HWLcQOUOen5mHB3bcKRlqPDJ-CXt7x2WbF9BPJV1g")' }}></div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
            {/* Key ensures animation triggers on route change */}
             <div key={currentScreen} className="h-full w-full animate-screen-enter">
                {renderScreen()}
             </div>
        </div>
      </div>
    </div>
  );
};

export default App;