import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`select-none ${className}`}>
      {/* Increased width and viewBox to ensure 'y' is not cut off */}
      <svg width="260" height="50" viewBox="0 0 260 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text 
          x="0" 
          y="38" 
          fill="#8b5cf6" 
          fontFamily="'Caviar Dreams', sans-serif" 
          fontSize="44" 
          fontWeight="400" 
          letterSpacing="-1px"
        >
          Celebeauty
        </text>
      </svg>
    </div>
  );
};