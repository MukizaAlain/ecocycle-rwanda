import React from 'react';
import { Screen } from '../types';
import { LayoutDashboard, Calendar, History, Gift, User, Settings, PlusCircle, Recycle, LogOut } from 'lucide-react';

interface SidebarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  isMobile?: boolean;
  onLogout?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentScreen, onNavigate, isMobile, onLogout }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'schedule', label: 'Schedule Pickup', icon: Calendar },
    { id: 'history', label: 'History', icon: History },
    { id: 'rewards', label: 'Rewards', icon: Gift },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <aside className="flex h-full w-full flex-col border-r border-white/5 bg-eco-dark/80 backdrop-blur-xl">
      <div className="flex h-full flex-col justify-between p-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1 px-2">
            <div className="flex items-center gap-3 mb-2">
                 <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <Recycle size={24} />
                 </div>
                 <div>
                    <h1 className="text-white text-xl font-bold leading-none tracking-tight">EcoCycle</h1>
                    <p className="text-eco-text-secondary text-xs font-medium mt-1">Rwanda</p>
                 </div>
            </div>
            {!isMobile && <p className="text-eco-text-secondary text-xs font-normal pl-1">Recycle E-Waste for a Greener Future</p>}
          </div>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentScreen === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as Screen)}
                  className={`group flex items-center gap-3 rounded-xl px-4 py-3.5 transition-all duration-200 ${
                    isActive
                      ? 'bg-surface-highlight/80 text-white shadow-lg shadow-black/20 ring-1 ring-white/5 backdrop-blur-sm'
                      : 'text-eco-text-secondary hover:bg-surface-highlight/50 hover:text-white'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-primary' : 'text-eco-text-secondary group-hover:text-white'} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
             <button
                  onClick={() => {}}
                  className="group flex items-center gap-3 rounded-xl px-4 py-3.5 text-eco-text-secondary hover:bg-surface-highlight/50 hover:text-white transition-all duration-200"
                >
                  <Settings size={20} className="text-eco-text-secondary group-hover:text-white" />
                  <span className="text-sm font-medium">Settings</span>
            </button>
             <button
                  onClick={onLogout}
                  className="group flex items-center gap-3 rounded-xl px-4 py-3.5 text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200 mt-2"
                >
                  <LogOut size={20} className="text-red-400 group-hover:text-red-300" />
                  <span className="text-sm font-medium">Logout</span>
            </button>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-[#234832]/80 to-eco-border/70 p-5 border border-white/5 relative overflow-hidden group backdrop-blur-md">
            <div className="absolute -right-6 -top-6 bg-primary/10 h-24 w-24 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
            <p className="text-sm font-bold text-white mb-1 relative z-10">Impact Stats</p>
            <p className="text-xs text-eco-text-secondary mb-3 relative z-10">You've recycled 12kg of e-waste!</p>
            <div className="h-1.5 w-full rounded-full bg-black/20 relative z-10">
              <div className="h-1.5 w-3/4 rounded-full bg-primary shadow-[0_0_10px_rgba(43,238,121,0.5)]"></div>
            </div>
          </div>
          
          <button 
            onClick={() => onNavigate('schedule')}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary h-12 px-4 text-eco-dark text-sm font-bold shadow-lg shadow-primary/20 transition hover:bg-primary/90 hover:shadow-primary/30 active:scale-[0.98]"
          >
            <PlusCircle size={20} />
            <span>New Pickup</span>
          </button>
          
          {!isMobile && (
            <div className="flex items-center gap-3 px-2 pt-4 border-t border-white/10">
                <div className="h-10 w-10 rounded-full bg-cover bg-center border border-white/10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDbK9lG4KyS8A-nxMCyaeUFty9DJ5gv_WN6U4fpgx846gRh2ciLdY8yo4Q1gbjhHOYdI8eXfKdsPZThrqiORhAudJPn-_ByXhY8kK9NBghSba8_IKqk_uSjLl6faKyLkUGctR3X3y6y5ShfrKkRPQfl2UpzaQtNxSa1hhsYa3RdsuL1Sf7ReTsCc3wjwEYHwLffLkvE-wscjPzt0VyGxiM7wtxjFAVe3IX_5HWLcQOUOen5mHB3bcKRlqPDJ-CXt7x2WbF9BPJV1g")' }}></div>
                <div className="flex flex-col">
                    <p className="text-sm font-bold text-white">Keza Amina</p>
                    <p className="text-xs text-eco-text-secondary">Pro Plan</p>
                </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};