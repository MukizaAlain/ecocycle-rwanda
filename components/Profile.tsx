import React, { useState, useRef } from 'react';
import { Edit, Mail, Phone, MapPin, Save, Lock, LogOut, ShieldCheck, User } from 'lucide-react';

interface ProfileProps {
  onLogout?: () => void;
  onNavigate?: (screen: any) => void;
}

export const Profile: React.FC<ProfileProps> = ({ onLogout }) => {
  const [profile, setProfile] = useState({
    name: 'Keza Uwase',
    email: 'keza.uwase@example.com',
    phone: '+250 788 123 456',
    location: 'Nyarugenge, Kigali, Rwanda',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADoHoyxWYR27G7sPd--HRijeo3-YHG0ay_oEEvlzxku2nU3lURLBJNgRHXSnRwpOEzcyLWaC5F8xImtt7ePPyN4qOnj37K0mblxP47wYQiCQXtZZRnP-Gi4RTEyn4y7B427eqlZa0VEsVtiJDruELjmppfrQ6ZUi-jWAPc-AYg4WK8SnLgg9sowzoiJoeiPvbsLhOEPOpRkhveuZ0Brrni5enavLOWHwEQTOp4T6TBtrWO9SDh1WaJ-oiGK4yxYFYBr97BBvI41tI'
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({ ...prev, avatar: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSave = () => {
    // Simulate API save
    console.log('Saving profile...', profile);
    alert('Profile changes saved successfully!');
  };

  return (
    <div className="flex flex-col items-center py-8 px-4 md:px-12 lg:px-24">
      <div className="flex w-full max-w-4xl flex-col gap-8">
        {/* Page Heading */}
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white drop-shadow-md">My Profile</h2>
          <p className="text-slate-500 dark:text-eco-text-secondary text-base font-medium">Manage your personal information and account settings.</p>
        </div>

        {/* Profile Header Card */}
        <div className="relative overflow-hidden rounded-3xl bg-white/10 dark:bg-eco-dark/80 backdrop-blur-xl border border-slate-200 dark:border-eco-border p-6 md:p-8 shadow-xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative group">
              <div 
                className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-cover bg-center border-4 border-white dark:border-[#234832] shadow-md bg-slate-100 dark:bg-surface-dark flex items-center justify-center overflow-hidden"
                style={{ backgroundImage: profile.avatar ? `url("${profile.avatar}")` : 'none' }}
              >
                {!profile.avatar && <User className="h-12 w-12 text-slate-400" />}
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={handleImageUpload}
              />
              <button 
                onClick={triggerFileInput}
                className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-eco-dark shadow-lg transition hover:scale-110 cursor-pointer z-10"
                title="Change Profile Picture"
              >
                <Edit size={16} />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{profile.name || 'User'}</h3>
                <span className="inline-flex items-center rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-semibold text-primary border border-primary/30">
                  Eco-Warrior
                </span>
              </div>
              <p className="text-slate-500 dark:text-eco-text-secondary">{profile.location || 'Location not set'} • Member since 2023</p>
              <div className="mt-2 flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                <ShieldCheck size={16} />
                <span>Identity Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editable Form */}
        <div className="grid gap-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Name Input */}
             <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-700 dark:text-white">Full Name</span>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-eco-text-secondary" size={20} />
                <input 
                  type="text" 
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-slate-200 dark:border-eco-border bg-white dark:bg-eco-input/60 backdrop-blur-sm pl-11 pr-4 py-3.5 text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-eco-text-secondary focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none shadow-sm" 
                />
              </div>
            </label>

            {/* Email */}
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-700 dark:text-white">Email Address</span>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-eco-text-secondary" size={20} />
                <input 
                  type="email" 
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-slate-200 dark:border-eco-border bg-white dark:bg-eco-input/60 backdrop-blur-sm pl-11 pr-4 py-3.5 text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-eco-text-secondary focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none shadow-sm" 
                />
              </div>
            </label>

            {/* Phone */}
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-700 dark:text-white">Phone Number</span>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-eco-text-secondary" size={20} />
                <input 
                  type="tel" 
                  name="phone"
                  value={profile.phone}
                  onChange={handleInputChange}
                  placeholder="+250..."
                  className="w-full rounded-2xl border border-slate-200 dark:border-eco-border bg-white dark:bg-eco-input/60 backdrop-blur-sm pl-11 pr-4 py-3.5 text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-eco-text-secondary focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none shadow-sm" 
                />
              </div>
            </label>

            {/* Location */}
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-700 dark:text-white">Location</span>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-eco-text-secondary" size={20} />
                <input 
                  type="text" 
                  name="location"
                  value={profile.location}
                  onChange={handleInputChange}
                  placeholder="City, Country"
                  className="w-full rounded-2xl border border-slate-200 dark:border-eco-border bg-white dark:bg-eco-input/60 backdrop-blur-sm pl-11 pr-4 py-3.5 text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-eco-text-secondary focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none shadow-sm" 
                />
              </div>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
              <button 
                onClick={handleSave}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-eco-dark shadow-md transition hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark active:scale-[0.98]"
              >
                <Save size={20} />
                Save Changes
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-eco-border bg-transparent px-6 py-3 text-sm font-bold text-slate-700 dark:text-white transition hover:bg-slate-100 dark:hover:bg-eco-input/50 hover:border-slate-400 dark:hover:border-slate-500">
                <Lock size={20} />
                Change Password
              </button>
            </div>
            <button 
                onClick={onLogout}
                className="flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-red-500 transition hover:bg-red-500/10 hover:text-red-400"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};