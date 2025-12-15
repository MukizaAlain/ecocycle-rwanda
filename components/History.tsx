import React from 'react';
import { Download, Search, Calendar, Monitor, Smartphone, Printer, Keyboard, Ticket, Loader } from 'lucide-react';

export const History: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Page Header & Stats */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold text-white tracking-tight drop-shadow-md">Recycling History</h1>
              <p className="text-gray-400 text-base max-w-2xl font-medium">Track your past e-waste pickups and view your rewards redemption activity.</p>
            </div>
            <button className="bg-primary hover:bg-green-400 text-background-dark font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-primary/20">
              <Download size={20} />
              Export Report
            </button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-surface-dark/80 backdrop-blur-md rounded-xl p-5 border border-[#234832] flex flex-col gap-1 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="p-2 rounded-lg bg-[#234832]/80 text-primary material-symbols-outlined font-bold">♻️</span>
                <span className="text-sm font-medium text-gray-300">Total E-Waste Recycled</span>
              </div>
              <p className="text-3xl font-bold text-white">125 <span className="text-lg font-normal text-gray-400">kg</span></p>
              <div className="flex items-center gap-1 text-sm text-primary mt-1">
                <span>+12% vs last month</span>
              </div>
            </div>
            <div className="bg-surface-dark/80 backdrop-blur-md rounded-xl p-5 border border-[#234832] flex flex-col gap-1 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                 <span className="p-2 rounded-lg bg-[#234832]/80 text-primary material-symbols-outlined font-bold">💰</span>
                <span className="text-sm font-medium text-gray-300">Current Balance</span>
              </div>
              <p className="text-3xl font-bold text-white">3,450 <span className="text-lg font-normal text-gray-400">pts</span></p>
              <div className="flex items-center gap-1 text-sm text-primary mt-1">
                <span>+500 pts this week</span>
              </div>
            </div>
            <div className="bg-surface-dark/80 backdrop-blur-md rounded-xl p-5 border border-[#234832] flex flex-col gap-1 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                 <span className="p-2 rounded-lg bg-[#234832]/80 text-primary material-symbols-outlined font-bold">🚚</span>
                <span className="text-sm font-medium text-gray-300">Pickups Completed</span>
              </div>
              <p className="text-3xl font-bold text-white">12</p>
              <div className="flex items-center gap-1 text-sm text-gray-400 mt-1">
                <span>Since Jan 2023</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters & Table Section */}
        <div className="bg-surface-dark/80 backdrop-blur-xl rounded-xl border border-[#234832] overflow-hidden shadow-xl">
          {/* Controls Toolbar */}
          <div className="p-5 border-b border-[#234832] flex flex-col lg:flex-row gap-4 justify-between lg:items-center bg-[#15291d]/60 backdrop-blur-sm">
            {/* Search & Date Filter */}
            <div className="flex flex-1 gap-3 max-w-2xl flex-col sm:flex-row">
              <div className="relative flex-1 group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  className="w-full bg-[#0f1f15]/80 border border-[#234832] text-white text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-500 transition-all backdrop-blur-sm" 
                  placeholder="Search transaction ID or item..." 
                  type="text" 
                />
              </div>
              <div className="relative w-full sm:w-48 group">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  className="w-full bg-[#0f1f15]/80 border border-[#234832] text-white text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-500 transition-all backdrop-blur-sm" 
                  placeholder="Filter by Date" 
                  type="text" 
                />
              </div>
            </div>
            {/* Tabs */}
            <div className="flex p-1 bg-[#0f1f15]/80 rounded-lg border border-[#234832] backdrop-blur-sm">
              <button className="px-4 py-1.5 text-sm font-medium rounded text-slate-900 bg-primary shadow-sm transition-all">All</button>
              <button className="px-4 py-1.5 text-sm font-medium rounded text-gray-400 hover:text-white transition-all">Pickups</button>
              <button className="px-4 py-1.5 text-sm font-medium rounded text-gray-400 hover:text-white transition-all">Rewards</button>
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#234832] bg-[#1a3626]/80">
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">Date</th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">Transaction ID</th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">Item Details</th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">Weight / Qty</th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">Status</th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-right text-gray-400">Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#234832] text-sm">
                <tr className="group hover:bg-[#1f3d2b]/60 transition-colors">
                  <td className="py-4 px-6 text-gray-300 font-medium">Oct 24, 2023</td>
                  <td className="py-4 px-6 text-gray-400 font-mono text-xs">#TXN-8832</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded bg-[#234832] flex items-center justify-center text-primary">
                        <Monitor size={18} />
                      </div>
                      <span className="text-white">CRT Monitor</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-300">12.0 kg</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/20">
                      <span className="size-1.5 rounded-full bg-primary"></span>
                      Completed
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-primary">+150</td>
                </tr>
                <tr className="group hover:bg-[#1f3d2b]/60 transition-colors">
                  <td className="py-4 px-6 text-gray-300 font-medium">Oct 20, 2023</td>
                  <td className="py-4 px-6 text-gray-400 font-mono text-xs">#RWD-1029</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400">
                        <Ticket size={18} />
                      </div>
                      <span className="text-white">5,000 Rwf Voucher</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-500">-</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/20">
                      <span className="size-1.5 rounded-full bg-blue-400"></span>
                      Redeemed
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-gray-400">-500</td>
                </tr>
                 <tr className="group hover:bg-[#1f3d2b]/60 transition-colors">
                  <td className="py-4 px-6 text-gray-300 font-medium">Oct 15, 2023</td>
                  <td className="py-4 px-6 text-gray-400 font-mono text-xs">#TXN-8810</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded bg-[#234832] flex items-center justify-center text-primary">
                        <Smartphone size={18} />
                      </div>
                      <span className="text-white">Mobile Phones (3)</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-300">0.5 kg</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-500 border border-yellow-500/20">
                      <span className="size-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                      Processing
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-gray-500">0</td>
                </tr>
                 <tr className="group hover:bg-[#1f3d2b]/60 transition-colors">
                  <td className="py-4 px-6 text-gray-300 font-medium">Oct 12, 2023</td>
                  <td className="py-4 px-6 text-gray-400 font-mono text-xs">#TXN-8755</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded bg-[#234832] flex items-center justify-center text-primary">
                        <Printer size={18} />
                      </div>
                      <span className="text-white">Old Printer</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-300">5.2 kg</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/20">
                      <span className="size-1.5 rounded-full bg-primary"></span>
                      Completed
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-primary">+85</td>
                </tr>
                 <tr className="group hover:bg-[#1f3d2b]/60 transition-colors">
                  <td className="py-4 px-6 text-gray-300 font-medium">Sep 28, 2023</td>
                  <td className="py-4 px-6 text-gray-400 font-mono text-xs">#TXN-8201</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded bg-[#234832] flex items-center justify-center text-primary">
                        <Keyboard size={18} />
                      </div>
                      <span className="text-white">Peripherals</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-300">2.1 kg</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/20">
                      <span className="size-1.5 rounded-full bg-red-400"></span>
                      Cancelled
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-gray-500">0</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="p-4 border-t border-[#234832] flex flex-col sm:flex-row items-center justify-between bg-[#15291d]/60 backdrop-blur-sm gap-4">
            <p className="text-sm text-gray-400">Showing <span className="text-white font-medium">1-5</span> of <span className="text-white font-medium">24</span> results</p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded border border-[#234832] text-sm text-gray-400 hover:text-white hover:bg-[#234832] disabled:opacity-50 transition-colors" disabled>Previous</button>
              <button className="px-3 py-1.5 rounded border border-[#234832] text-sm text-white bg-[#234832] hover:bg-[#2e5e41] transition-colors">1</button>
              <button className="px-3 py-1.5 rounded border border-[#234832] text-sm text-gray-400 hover:text-white hover:bg-[#234832] transition-colors">2</button>
              <button className="px-3 py-1.5 rounded border border-[#234832] text-sm text-gray-400 hover:text-white hover:bg-[#234832] transition-colors">3</button>
              <button className="px-3 py-1.5 rounded border border-[#234832] text-sm text-gray-400 hover:text-white hover:bg-[#234832] transition-colors">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};