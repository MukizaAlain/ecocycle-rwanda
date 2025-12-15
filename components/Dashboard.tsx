import React from 'react';
import { RefreshCw, ArrowUpRight, Scale, Leaf, Gift, BarChart, ExternalLink } from 'lucide-react';
import { BarChart as RechartsBarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'May', value: 450 },
  { name: 'Jun', value: 600 },
  { name: 'Jul', value: 350 },
  { name: 'Aug', value: 800 },
  { name: 'Sep', value: 550 },
  { name: 'Oct', value: 750 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-[1400px] p-6 lg:p-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-[#111418] dark:text-white drop-shadow-sm">Welcome back, Keza!</h1>
          <p className="text-[#637588] dark:text-[#92c9a8] text-base font-medium">Your recycling impact at a glance.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-[#92c9a8]">Last updated: Today, 9:41 AM</span>
          <button className="h-10 w-10 rounded-full bg-[#1c3a29]/80 backdrop-blur-md border border-[#2a4e37] text-[#92c9a8] hover:text-white hover:bg-[#234832] flex items-center justify-center transition-colors shadow-sm">
            <RefreshCw size={20} />
          </button>
        </div>
      </div>

      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {/* Main Balance Card */}
        <div className="md:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#234832]/90 to-[#1c3a29]/90 backdrop-blur-xl p-8 shadow-xl border border-[#2a4e37] flex flex-col justify-between min-h-[240px]">
          <div className="absolute right-0 top-0 h-full w-2/3 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 opacity-10 rotate-12 pointer-events-none">
             <span className="material-symbols-outlined text-[180px] text-white" style={{fontFamily: 'Material Symbols Outlined'}}>account_balance_wallet</span>
          </div>
          <div className="relative z-10 flex items-center justify-between mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#92c9a8] backdrop-blur-md border border-white/5">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Live Balance
            </div>
            <span className="text-[#92c9a8] text-sm font-medium">Silver Member</span>
          </div>
          <div className="relative z-10 flex flex-col gap-1">
            <div className="flex items-baseline gap-2">
              <h2 className="text-6xl font-black text-white tracking-tight drop-shadow-md">1,200</h2>
              <span className="text-2xl font-bold text-primary">Pts</span>
            </div>
            <p className="text-[#92c9a8] text-sm font-medium flex items-center gap-2 mt-1">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/20 text-primary">
                <ArrowUpRight size={14} />
              </span>
              <span>+200 pts earned this week</span>
            </p>
          </div>
          <div className="relative z-10 mt-8 flex gap-3">
            <button className="flex-1 bg-primary text-[#102217] font-bold py-3.5 px-6 rounded-2xl hover:bg-[#20d466] transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
              <Gift size={20} className="transition-transform group-hover:-rotate-12" />
              Redeem Rewards
            </button>
            <button className="px-6 py-3.5 rounded-2xl bg-[#102217]/50 text-white font-bold hover:bg-[#102217]/80 transition-colors border border-white/10 backdrop-blur-md">
              History
            </button>
          </div>
        </div>

        {/* Total Recycled */}
        <div className="relative overflow-hidden rounded-3xl bg-[#1c3a29]/80 backdrop-blur-xl p-6 shadow-xl border border-[#2a4e37] flex flex-col justify-between group hover:border-primary/30 transition-colors">
            <div className="flex items-start justify-between mb-4">
                <div className="rounded-2xl bg-[#234832]/80 backdrop-blur-sm p-3 text-white shadow-inner group-hover:scale-110 transition-transform">
                    <Scale size={24} />
                </div>
                <span className="text-xs font-bold uppercase text-[#92c9a8] tracking-wider py-1 px-2 bg-[#102217]/60 rounded-lg backdrop-blur-sm">Total</span>
            </div>
            <div>
                <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl font-bold text-white drop-shadow-sm">12</span>
                    <span className="text-lg font-medium text-[#92c9a8] mb-1">kg</span>
                </div>
                <p className="text-sm text-white font-medium mb-4">E-Waste Recycled</p>
                <div className="space-y-2">
                    <div className="flex justify-between text-xs text-[#92c9a8]">
                        <span>Current</span>
                        <span>Goal: 20kg</span>
                    </div>
                    <div className="w-full bg-[#102217]/60 h-3 rounded-full overflow-hidden p-0.5 box-content border border-[#2a4e37]">
                        <div className="bg-gradient-to-r from-primary to-[#20d466] h-3 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <p className="text-xs text-primary font-medium text-right mt-1">65% to Gold Tier</p>
                </div>
            </div>
        </div>

        {/* CO2 Impact */}
        <div className="relative overflow-hidden rounded-3xl bg-[#1c3a29]/80 backdrop-blur-xl p-6 shadow-xl border border-[#2a4e37] flex flex-col justify-between group hover:border-primary/30 transition-colors">
            <Leaf className="absolute -right-6 -bottom-6 text-[#234832]/40 rotate-12 group-hover:scale-110 transition-transform duration-500 pointer-events-none" size={160} />
            <div className="flex items-start justify-between relative z-10 mb-4">
                <div className="rounded-2xl bg-[#234832]/80 backdrop-blur-sm p-3 text-white shadow-inner group-hover:scale-110 transition-transform">
                     <span className="font-bold text-xs">CO₂</span>
                </div>
                <span className="text-xs font-bold uppercase text-[#92c9a8] tracking-wider py-1 px-2 bg-[#102217]/60 rounded-lg backdrop-blur-sm">Impact</span>
            </div>
            <div className="relative z-10">
                <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl font-bold text-white drop-shadow-sm">5.4</span>
                    <span className="text-lg font-medium text-[#92c9a8] mb-1">kg</span>
                </div>
                <p className="text-sm text-white font-medium mb-4">CO2 Offset</p>
                <div className="mt-auto inline-flex items-center gap-3 rounded-xl bg-[#102217]/60 px-4 py-3 border border-white/5 backdrop-blur-md w-full shadow-inner">
                    <div className="bg-green-900/50 p-1.5 rounded-lg text-primary">
                        <Leaf size={18} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-[#92c9a8]">Equivalent to</span>
                        <span className="text-sm font-bold text-white">2 Trees Planted</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Middle Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Activity Overview (Recharts) */}
        <div className="lg:col-span-2 rounded-3xl bg-[#1c3a29]/80 backdrop-blur-xl p-8 border border-[#2a4e37] shadow-xl flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <BarChart className="text-primary" size={24} />
                        Activity Overview
                    </h2>
                    <p className="text-sm text-[#92c9a8] mt-1">Points earned over the last 6 months</p>
                </div>
                <div className="flex items-center gap-2 bg-[#102217]/60 rounded-xl p-1 border border-[#2a4e37] backdrop-blur-sm">
                    <button className="px-4 py-2 rounded-lg bg-[#234832] text-white text-xs font-bold shadow-sm">6 Months</button>
                    <button className="px-4 py-2 rounded-lg text-[#92c9a8] hover:text-white hover:bg-[#234832] text-xs font-bold transition-colors">Year</button>
                </div>
            </div>
            <div className="flex-1 w-full min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={data}>
                        <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#92c9a8', fontSize: 12 }} 
                            dy={10}
                        />
                        <Tooltip 
                            cursor={{ fill: '#234832', opacity: 0.5, radius: 8 }}
                            contentStyle={{ backgroundColor: 'rgba(16, 34, 23, 0.9)', borderColor: '#2a4e37', borderRadius: '12px', color: '#fff', backdropFilter: 'blur(8px)' }}
                            itemStyle={{ color: '#2bee79' }}
                        />
                        <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={40}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#2bee79' : 'url(#colorGradient)'} />
                            ))}
                        </Bar>
                        <defs>
                            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2bee79" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#2bee79" stopOpacity={0.4}/>
                            </linearGradient>
                        </defs>
                    </RechartsBarChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Weight Stats */}
        <div className="rounded-3xl bg-[#1c3a29]/80 backdrop-blur-xl p-8 border border-[#2a4e37] shadow-xl flex flex-col">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Scale className="text-[#92c9a8]" size={24} />
                    Weight
                </h2>
                <div className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg border border-primary/20 backdrop-blur-sm">+12% vs last month</div>
            </div>
            <div className="flex-1 flex flex-col justify-end gap-6">
                <div className="flex flex-col gap-4">
                    {[
                        { month: 'Oct', val: 85, label: '8.5kg', color: 'bg-white' },
                        { month: 'Sep', val: 65, label: '6.5kg', color: 'bg-[#637588]' },
                        { month: 'Aug', val: 72, label: '7.2kg', color: 'bg-[#637588]' },
                        { month: 'Jul', val: 45, label: '4.5kg', color: 'bg-[#637588]' }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <span className="text-xs font-medium text-[#92c9a8] w-8">{item.month}</span>
                            <div className="flex-1 h-3 bg-[#102217]/60 rounded-full overflow-hidden backdrop-blur-sm">
                                <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.val}%` }}></div>
                            </div>
                            <span className="text-xs font-bold text-white w-8 text-right">{item.label}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-4 p-4 rounded-xl bg-[#234832]/60 border border-[#2a4e37] backdrop-blur-sm">
                    <p className="text-xs text-[#92c9a8] mb-1">Most Recycled Item</p>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white">Old Electronics</span>
                        <span className="text-sm font-bold text-primary">60%</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};