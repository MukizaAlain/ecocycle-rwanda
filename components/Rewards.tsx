import React from 'react';
import { PlusCircle, TrendingUp, Recycle, Smartphone, Wifi, Ticket, ShoppingBag, Battery, Monitor, Zap } from 'lucide-react';

export const Rewards: React.FC = () => {
  return (
    <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-10">
      {/* Hero Stats Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#234832]/90 to-[#152e1f]/90 backdrop-blur-xl p-8 sm:p-10 border border-[#2e5c40] shadow-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#92c9a8]">
              <span className="material-symbols-outlined text-xl">savings</span>
              <span className="text-sm font-medium uppercase tracking-wider">Current Balance</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight drop-shadow-md">2,450 <span className="text-primary text-3xl sm:text-4xl font-bold">pts</span></h1>
            <p className="text-gray-300 text-sm mt-1">Equivalent to approximately <span className="text-white font-bold">2,450 RWF</span></p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#2bee79] hover:bg-[#25d36a] text-[#112218] rounded-full font-bold transition-all shadow-lg shadow-primary/20 group">
              <PlusCircle size={20} className="group-hover:scale-110 transition-transform" />
              Earn More Points
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold backdrop-blur-sm transition-all border border-white/10">
              History
            </button>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-6 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
              <TrendingUp size={14} />
            </span>
            <span>+150 pts this week</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
              <Recycle size={14} />
            </span>
            <span>Next tier: Silver (550 pts away)</span>
          </div>
        </div>
      </section>

      {/* Rewards Catalog */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-white drop-shadow-sm">Available Rewards</h2>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-primary text-[#112218] px-5 text-sm font-bold whitespace-nowrap transition-colors">
              All Rewards
            </button>
            <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-[#234832]/80 hover:bg-[#2e5c40] text-gray-300 px-5 text-sm font-medium whitespace-nowrap transition-colors backdrop-blur-sm">
              <Smartphone size={18} />
              Airtime
            </button>
            <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-[#234832]/80 hover:bg-[#2e5c40] text-gray-300 px-5 text-sm font-medium whitespace-nowrap transition-colors backdrop-blur-sm">
              <Wifi size={18} />
              Data Bundles
            </button>
            <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-[#234832]/80 hover:bg-[#2e5c40] text-gray-300 px-5 text-sm font-medium whitespace-nowrap transition-colors backdrop-blur-sm">
              <Ticket size={18} />
              Vouchers
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* MTN */}
          <div className="group relative flex flex-col rounded-xl bg-[#1a3324]/80 backdrop-blur-xl border border-[#234832] overflow-hidden hover:border-[#2bee79] hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <div className="h-40 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUO_w4E8BWHl-besilGjwNweejeMXbrVMOg68dIRR6zTqXlkiQrLyG5h22wV2bgtjZTQw0-KXEzEq34pVWwTWrRpoSqIAwf5uHBTFShPtCVINtaMUSJKT0-0LfEjbAWPBs3OZ5P3ybz5TWa21zQm6pYXFYyuThe0i9KRYuOAACJHp_gEl0dnLEE4dRRKA54Uwkg3JQ88j-_BpwnniS5JlPGqha1UColUutAVzfQF7JDa6xdDkmyg_sW956YMwtAlAHCQW9J3Pkrlo")' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3324] to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded mb-2 inline-block">MTN Rwanda</span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">1GB Daily Data Bundle</h3>
              <p className="text-gray-400 text-sm line-clamp-2">Valid for 24 hours. High speed 4G internet for browsing and streaming.</p>
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-[#234832]">
                <span className="text-xl font-bold text-white">500 <span className="text-xs font-normal text-gray-400">pts</span></span>
                <button className="px-4 py-2 rounded-full bg-[#234832] text-primary text-sm font-bold group-hover:bg-primary group-hover:text-[#112218] transition-colors">Redeem</button>
              </div>
            </div>
          </div>

          {/* Airtel */}
          <div className="group relative flex flex-col rounded-xl bg-[#1a3324]/80 backdrop-blur-xl border border-[#234832] overflow-hidden hover:border-[#2bee79] hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <div className="h-40 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQwpJFM9ZpcsEvH7Tr4Vi4Y2_jFXo3ExibEHbSUUQ2n_YrdjBzQsOYa80NtgGaTjUtquzrArdRqDvDygOX2D_EzuDeqj6990St6TQ2j6J4PFkYu8wqFL1qoGHVYHEXIG201RT75D0FUf8Nj33n14X6QxlLYi-eVbowQbTPfb_m5bu1zHvgWU6Ex1swzSbULj_Qn0p18GQJsQIt2tzY4AWrEzpRm-G9ZYSJOnPDqPNu97JAAZtwgp9ZCAJJAmAPu9U9VS786US6N5w")' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3324] to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">Airtel-Tigo</span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">500 RWF Airtime</h3>
              <p className="text-gray-400 text-sm line-clamp-2">Recharge your main balance. Valid for calls and SMS to all networks.</p>
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-[#234832]">
                <span className="text-xl font-bold text-white">500 <span className="text-xs font-normal text-gray-400">pts</span></span>
                <button className="px-4 py-2 rounded-full bg-[#234832] text-primary text-sm font-bold group-hover:bg-primary group-hover:text-[#112218] transition-colors">Redeem</button>
              </div>
            </div>
          </div>

          {/* Bourbon */}
          <div className="group relative flex flex-col rounded-xl bg-[#1a3324]/80 backdrop-blur-xl border border-[#234832] overflow-hidden hover:border-[#2bee79] hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
             <div className="h-40 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMk0DA1Kyj4zVQPT4hkimVW45EeW5dFyr_QXK1WfY45qImD_RYcXDI3fdJg0eMGKOfOqJOh6l-gysEZQmyx4KA6M6kx4NNGQsH7W6MG8LulAc8LLAWoyyfTqCk1c_uZtnZX8Mvi2xwf3yHVjG7nBSgdZdU1CRRd684_LX3e9nHVJHw8K7IEARtd7ORPpKMLrYClFGObOpGvvRTdnYJbt87vawAh2MnNL4mVeHmzY-bgx-jYuCCxpSHK1nnExgaTEoQ0lbbt0lxuuo")' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3324] to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#d4a574] text-black text-xs font-bold px-2 py-1 rounded mb-2 inline-block">Bourbon Coffee</span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Free Coffee Voucher</h3>
              <p className="text-gray-400 text-sm line-clamp-2">Enjoy a free regular coffee or tea at any Bourbon Coffee location in Kigali.</p>
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-[#234832]">
                <span className="text-xl font-bold text-white">1,200 <span className="text-xs font-normal text-gray-400">pts</span></span>
                <button className="px-4 py-2 rounded-full bg-[#234832] text-primary text-sm font-bold group-hover:bg-primary group-hover:text-[#112218] transition-colors">Redeem</button>
              </div>
            </div>
          </div>
          
           {/* Canal+ */}
           <div className="group relative flex flex-col rounded-xl bg-[#1a3324]/80 backdrop-blur-xl border border-[#234832] overflow-hidden hover:border-[#2bee79] hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
             <div className="h-40 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUD_eVK49v7yYngz6ETqGovA4ndjeh1LJA5i-RRPuD9Y0jtvNElKSdSGXYIkBLNxmxUTgJILebQA8jwc6WbnL2UOg1c_T7HKULh4dKyjQl9VQltYvhfBNz59GskdT-6bIYuVbvUKDJpXf-gWXlQYXq4ViRnErHHyHTFTBr3_qGY1DMc9L0JYnJzAzQ_zed3LZRNcYH1FsOFnSP9UR7BjznouOBHYjYyjbt_GmqgyeFV-X8FPi-PwN90EC_8E8Dy-keR-qD6P6bFl8")' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3324] to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">Canal+</span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">1 Week Access (Ikaze)</h3>
              <p className="text-gray-400 text-sm line-clamp-2">Get one week of the Ikaze bouquet. Sports, movies, and local channels.</p>
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-[#234832]">
                <span className="text-xl font-bold text-white">3,000 <span className="text-xs font-normal text-gray-400">pts</span></span>
                <button className="px-4 py-2 rounded-full bg-[#234832] text-primary text-sm font-bold group-hover:bg-primary group-hover:text-[#112218] transition-colors">Redeem</button>
              </div>
            </div>
          </div>

          {/* Jumia */}
          <div className="group relative flex flex-col rounded-xl bg-[#1a3324]/80 backdrop-blur-xl border border-[#234832] overflow-hidden hover:border-[#2bee79] hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
             <div className="h-40 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPLJr8JDDPE9eo3oNJlHG4GLhqfjc9J-YGbxNOEm6VW3cZIgWlrTfqH382pTeJekqH0fJmT2kaVyfdEaGLyu9hIr1q5jg9YoP8cZJzvZpCR-IPPem7j5OLxy-Cu3YpqcBwfn8oken6zU-pEApbxuRubDfxvpXIJHUwT-rUg-x40ROWyQnamCl4UGvJ56VNZgCbgvbRPpTHQt1Fgj2dFfkKa0C9mmal6Cujp7CDWFz9CUqGPvECu7WbRRp0CnIUrh2wB72IDS9AHMk")' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3324] to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">Jumia Food</span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">2,000 RWF Voucher</h3>
              <p className="text-gray-400 text-sm line-clamp-2">Discount voucher for your next food order on Jumia Food.</p>
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-[#234832]">
                <span className="text-xl font-bold text-white">2,000 <span className="text-xs font-normal text-gray-400">pts</span></span>
                <button className="px-4 py-2 rounded-full bg-[#234832] text-primary text-sm font-bold group-hover:bg-primary group-hover:text-[#112218] transition-colors">Redeem</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Shop: Specific Items Redemption */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-white drop-shadow-sm flex items-center gap-2">
                <ShoppingBag className="text-primary" />
                Eco-Shop: Refurbished Gear
            </h2>
            <p className="text-gray-400">Redeem your hard-earned points for refurbished electronics and eco-friendly accessories.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
             {/* Item 1 */}
            <div className="group rounded-xl bg-[#1a3324]/60 backdrop-blur-xl border border-[#234832] overflow-hidden hover:border-primary/50 transition-all p-4 flex flex-col gap-4">
                <div className="aspect-square rounded-lg bg-[#234832]/50 flex items-center justify-center relative overflow-hidden">
                    <Battery className="text-primary w-16 h-16 opacity-80" />
                    <div className="absolute top-2 right-2 bg-primary text-[#112218] text-xs font-bold px-2 py-1 rounded">Refurbished</div>
                </div>
                <div>
                    <h3 className="text-white font-bold">Power Bank 10000mAh</h3>
                    <p className="text-gray-400 text-xs mt-1">Certified pre-owned, solar charging capable.</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                    <span className="text-primary font-bold">2,500 pts</span>
                    <button className="text-xs bg-[#234832] hover:bg-primary hover:text-[#112218] text-white px-3 py-1.5 rounded-lg transition-colors font-bold">Get Item</button>
                </div>
            </div>

            {/* Item 2 */}
            <div className="group rounded-xl bg-[#1a3324]/60 backdrop-blur-xl border border-[#234832] overflow-hidden hover:border-primary/50 transition-all p-4 flex flex-col gap-4">
                <div className="aspect-square rounded-lg bg-[#234832]/50 flex items-center justify-center relative overflow-hidden">
                    <Monitor className="text-blue-400 w-16 h-16 opacity-80" />
                    <div className="absolute top-2 right-2 bg-primary text-[#112218] text-xs font-bold px-2 py-1 rounded">Refurbished</div>
                </div>
                <div>
                    <h3 className="text-white font-bold">Logitech Mouse</h3>
                    <p className="text-gray-400 text-xs mt-1">Wireless optical mouse, cleaned and tested.</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                    <span className="text-primary font-bold">800 pts</span>
                    <button className="text-xs bg-[#234832] hover:bg-primary hover:text-[#112218] text-white px-3 py-1.5 rounded-lg transition-colors font-bold">Get Item</button>
                </div>
            </div>

             {/* Item 3 */}
            <div className="group rounded-xl bg-[#1a3324]/60 backdrop-blur-xl border border-[#234832] overflow-hidden hover:border-primary/50 transition-all p-4 flex flex-col gap-4">
                <div className="aspect-square rounded-lg bg-[#234832]/50 flex items-center justify-center relative overflow-hidden">
                    <Zap className="text-yellow-400 w-16 h-16 opacity-80" />
                    <div className="absolute top-2 right-2 bg-green-500 text-[#112218] text-xs font-bold px-2 py-1 rounded">New</div>
                </div>
                <div>
                    <h3 className="text-white font-bold">Fast Charger Cable</h3>
                    <p className="text-gray-400 text-xs mt-1">Durable braided USB-C cable made from recycled plastics.</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                    <span className="text-primary font-bold">450 pts</span>
                    <button className="text-xs bg-[#234832] hover:bg-primary hover:text-[#112218] text-white px-3 py-1.5 rounded-lg transition-colors font-bold">Get Item</button>
                </div>
            </div>
             
             {/* Item 4 */}
            <div className="group rounded-xl bg-[#1a3324]/60 backdrop-blur-xl border border-[#234832] overflow-hidden hover:border-primary/50 transition-all p-4 flex flex-col gap-4">
                <div className="aspect-square rounded-lg bg-[#234832]/50 flex items-center justify-center relative overflow-hidden">
                    <Smartphone className="text-purple-400 w-16 h-16 opacity-80" />
                    <div className="absolute top-2 right-2 bg-primary text-[#112218] text-xs font-bold px-2 py-1 rounded">Refurbished</div>
                </div>
                <div>
                    <h3 className="text-white font-bold">Generic Phone Stand</h3>
                    <p className="text-gray-400 text-xs mt-1">Adjustable desktop stand for smartphones.</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                    <span className="text-primary font-bold">300 pts</span>
                    <button className="text-xs bg-[#234832] hover:bg-primary hover:text-[#112218] text-white px-3 py-1.5 rounded-lg transition-colors font-bold">Get Item</button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};