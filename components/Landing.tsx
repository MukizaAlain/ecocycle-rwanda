import React from 'react';
import { Screen } from '../types';
import { Recycle, ArrowRight, PlayCircle, Menu, Check, Camera, Truck, Wallet } from 'lucide-react';

interface LandingProps {
  onNavigate: (screen: Screen) => void;
}

export const Landing: React.FC<LandingProps> = ({ onNavigate }) => {
  return (
    <div className="font-display min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-background-dark">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="text-primary">
                <Recycle size={32} />
              </div>
              <span className="text-white text-xl font-bold tracking-tight">EcoCycle Rwanda</span>
            </div>
            <div className="hidden md:flex gap-3">
              <button 
                onClick={() => onNavigate('auth')}
                className="flex items-center justify-center rounded-full h-10 px-6 border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Log In
              </button>
            </div>
            <div className="md:hidden text-white">
              <Menu size={24} />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <main className="flex-grow flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="flex flex-col gap-6 lg:gap-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 w-fit">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary text-xs font-bold uppercase tracking-wider">Live in Kigali</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-lg">
                Turn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">E-Waste</span> into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">Airtime</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 font-normal leading-relaxed max-w-lg mx-auto lg:mx-0 drop-shadow-md">
                EcoCycle Rwanda helps you clean up the environment and get rewarded instantly. Don't throw it away—recycle and earn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button 
                  onClick={() => onNavigate('dashboard')}
                  className="group flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-primary hover:bg-green-400 text-background-dark text-lg font-bold shadow-[0_4px_20px_rgba(43,238,121,0.25)] transition-all transform hover:-translate-y-1"
                >
                  Start Recycling
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-sm text-lg font-semibold transition-colors">
                  <PlayCircle size={20} />
                  How it Works
                </button>
              </div>
            </div>

            {/* Hero Image/Mockup */}
            <div className="relative w-full h-full flex justify-center items-center lg:justify-end mt-12 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-primary/20 blur-[100px] rounded-full -z-10"></div>
              <div 
                className="relative z-10 w-full max-w-[420px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-surface-dark group" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB15GXl4Z4ijZlBlbHAWglPxEHCx3vRP_IYWFU8Aoe5erTaEejWNI4PRppXHa993bldigNK_qJH9jPI1LgAgA1gCk3nnyEglQE5LnrIjNz0laWclaYET5e8I2Ciyq0Bj8Rod0UzLdWaleAM10XVRnrLkScYW0kQqZFKTBbwg-vekBUIag-EuXh77pl3j3zEh06B0AYeSgwN_QJZug7odD_w3RJlvBhMNB_g1P44oI-nKzC2vJJoeSy-z6U98w3Oa9F4bJ6anM5TuNA")', backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90"></div>
                {/* Mock UI Element */}
                <div className="absolute bottom-8 left-8 right-8 p-4 rounded-lg bg-background-dark/80 backdrop-blur-md border border-white/10 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-background-dark">
                      <Check size={24} />
                    </div>
                    <div>
                      <p className="text-white font-bold">Old Laptop Recycled</p>
                      <p className="text-primary text-sm font-semibold">+ 5,000 RWF Airtime</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Steps Section */}
        <section className="w-full bg-background-dark/60 backdrop-blur-lg py-20 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-primary font-bold tracking-wider uppercase mb-2 text-sm">Simple Process</h2>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Recycle in 3 Easy Steps</h3>
              <p className="text-gray-300">We've removed the friction. Just point, shoot, and get paid for cleaning the planet.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Steps */}
              {[
                { id: 1, title: 'Snap a Photo', desc: 'Open the app and take a picture of your old electronics. Our AI instantly identifies the device and estimates its value.', Icon: Camera },
                { id: 2, title: 'Schedule Pickup', desc: 'Choose a time that works for you. Our verified Eco-Agents come to your doorstep anywhere in Kigali to collect the items.', Icon: Truck },
                { id: 3, title: 'Get Paid', desc: 'Once verified, receive instant payment via Mobile Money or direct Airtime top-up. It\'s fast, secure, and rewarding.', Icon: Wallet }
              ].map((step) => (
                <div key={step.id} className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white/10">
                    <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-background-dark border-4 border-primary flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">{step.id}</div>
                    <div className="h-16 w-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                         <step.Icon size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-background-dark/90 backdrop-blur-xl border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
                <div className="flex items-center gap-2 text-white">
                    <Recycle size={24} className="text-primary" />
                    <span className="text-xl font-bold">EcoCycle Rwanda</span>
                </div>
                <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
                    Building a cleaner, greener future for Rwanda, one device at a time.
                </p>
            </div>
            <div className="max-w-7xl mx-auto mt-0 pt-0 text-center">
                <p className="text-gray-500 text-sm">© 2023 EcoCycle Rwanda. All rights reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
};