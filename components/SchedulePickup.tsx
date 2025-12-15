import React, { useState } from 'react';
import { Camera, MapPin, Calendar, Star, X, CheckCircle } from 'lucide-react';

export const SchedulePickup: React.FC = () => {
  const [formData, setFormData] = useState({
    location: '',
    dateTime: '',
    description: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirm = () => {
    // Simulate API submission
    setIsSuccess(true);
    setTimeout(() => {
        setIsSuccess(false);
        setShowModal(false);
        // Reset form or navigate
        setFormData({ location: '', dateTime: '', description: '' });
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col items-center py-10 px-4 md:px-10 w-full relative">
      <div className="w-full max-w-[720px] flex flex-col gap-8">
        {/* Heading */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] drop-shadow-md">Schedule Pickup</h1>
          <p className="text-text-secondary text-lg font-normal leading-normal font-medium">Recycle your e-waste responsibly and earn points.</p>
        </div>

        {/* Form Container */}
        <div className="flex flex-col gap-6">
          {/* Upload Section */}
          <div className="flex flex-col group/upload cursor-pointer">
            <div className="flex flex-col items-center gap-6 rounded-2xl border-2 border-dashed border-border-dark bg-surface-dark/40 hover:bg-surface-dark/60 backdrop-blur-md hover:border-primary/50 transition-all px-6 py-12">
              <div className="rounded-full bg-border-dark/30 p-4 text-primary group-hover/upload:scale-110 transition-transform">
                <Camera size={40} />
              </div>
              <div className="flex max-w-[480px] flex-col items-center gap-1">
                <p className="text-white text-lg font-bold leading-tight tracking-tight text-center">Upload Photo of Item</p>
                <p className="text-text-secondary text-sm font-normal leading-normal text-center">Click or drag to upload image of your e-waste</p>
              </div>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-surface-dark/80 border border-border-dark text-white text-sm font-bold leading-normal hover:border-primary transition-colors backdrop-blur-sm">
                <span className="truncate">Browse Files</span>
              </button>
            </div>
          </div>

          {/* Input Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location Input */}
            <label className="flex flex-col flex-1 gap-2">
              <span className="text-white text-base font-medium leading-normal">Select Location</span>
              <div className="relative flex w-full items-center">
                <input 
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="flex w-full flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-dark bg-surface-dark/60 h-14 placeholder:text-text-secondary pl-4 pr-12 text-base font-normal leading-normal transition-shadow backdrop-blur-sm" 
                  placeholder="Enter pickup address" 
                />
                <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center pr-4 text-primary pointer-events-none">
                  <MapPin size={24} />
                </div>
              </div>
            </label>
            {/* Date & Time Input */}
            <label className="flex flex-col flex-1 gap-2">
              <span className="text-white text-base font-medium leading-normal">Pick Date &amp; Time</span>
              <div className="relative flex w-full items-center">
                <input 
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleInputChange}
                  type="datetime-local"
                  className="flex w-full flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-dark bg-surface-dark/60 h-14 placeholder:text-text-secondary pl-4 pr-12 text-base font-normal leading-normal transition-shadow scheme-dark backdrop-blur-sm" 
                  placeholder="Select date and time" 
                />
                <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center pr-4 text-primary pointer-events-none">
                  <Calendar size={24} />
                </div>
              </div>
            </label>
          </div>

          {/* Item Description (Optional/Extra context) */}
          <label className="flex flex-col flex-1 gap-2">
            <span className="text-white text-base font-medium leading-normal">Item Description <span className="text-text-secondary font-normal text-sm">(Optional)</span></span>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-dark bg-surface-dark/60 min-h-[100px] placeholder:text-text-secondary p-4 text-base font-normal leading-normal transition-shadow resize-none backdrop-blur-sm" 
              placeholder="Briefly describe the items..."
            ></textarea>
          </label>

          {/* Summary & Action Section */}
          <div className="mt-4 flex flex-col gap-4">
            {/* Summary Card */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl bg-gradient-to-r from-surface-dark/80 to-[#162e21]/80 backdrop-blur-md border border-border-dark p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Star size={24} fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-text-secondary text-sm font-medium uppercase tracking-wider">Estimated Reward</span>
                  <span className="text-white text-2xl font-bold tracking-tight">500 <span className="text-primary">Points</span></span>
                </div>
              </div>
              <div className="h-px w-full sm:h-12 sm:w-px bg-border-dark"></div>
              <div className="flex flex-col items-center sm:items-end gap-1">
                <span className="text-text-secondary text-xs">Recycling Rate</span>
                <span className="text-white text-sm font-medium">Standard Electronics</span>
              </div>
            </div>

            {/* Confirm Button */}
            <button 
                onClick={() => setShowModal(true)}
                disabled={!formData.location || !formData.dateTime}
                className="w-full mt-2 cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary hover:bg-[#25d36b] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all text-background-dark text-lg font-bold leading-normal tracking-wide shadow-[0_0_20px_rgba(43,238,121,0.3)]"
            >
              Confirm Pickup
            </button>
            <p className="text-center text-text-secondary text-sm mt-2 font-medium">By confirming, you agree to our recycling policy.</p>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
            <div className="relative bg-[#112218] border border-border-green rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl animate-screen-enter">
                {!isSuccess ? (
                    <>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-white">Confirm Details</h3>
                            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white"><X size={24} /></button>
                        </div>
                        <div className="flex flex-col gap-4 mb-8">
                            <div className="p-4 rounded-xl bg-surface-dark/50 border border-white/5">
                                <span className="text-xs text-primary font-bold uppercase tracking-wider block mb-1">Pickup Location</span>
                                <p className="text-white font-medium">{formData.location}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-surface-dark/50 border border-white/5">
                                <span className="text-xs text-primary font-bold uppercase tracking-wider block mb-1">Date & Time</span>
                                <p className="text-white font-medium">{new Date(formData.dateTime).toLocaleString()}</p>
                            </div>
                            {formData.description && (
                                <div className="p-4 rounded-xl bg-surface-dark/50 border border-white/5">
                                    <span className="text-xs text-primary font-bold uppercase tracking-wider block mb-1">Notes</span>
                                    <p className="text-gray-300 text-sm">{formData.description}</p>
                                </div>
                            )}
                        </div>
                        <div className="flex gap-3">
                            <button 
                                onClick={() => setShowModal(false)}
                                className="flex-1 py-3.5 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 transition-colors"
                            >
                                Edit
                            </button>
                            <button 
                                onClick={handleConfirm}
                                className="flex-1 py-3.5 rounded-full bg-primary text-background-dark font-bold hover:bg-green-400 transition-colors shadow-lg shadow-primary/20"
                            >
                                Submit Request
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center py-8">
                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6 animate-pulse">
                            <CheckCircle size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Request Confirmed!</h3>
                        <p className="text-gray-300">An Eco-Agent will be assigned to your pickup shortly.</p>
                    </div>
                )}
            </div>
        </div>
      )}
    </div>
  );
};