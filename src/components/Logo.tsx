import React from 'react';

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <div className={`${className} rounded-[10px] overflow-hidden bg-white flex items-center justify-center shadow-lg`}>
      <img 
        src="/logo.png" 
        alt="UNICORN BMS Logo" 
        className="w-full h-full object-contain p-1"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
