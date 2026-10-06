import React from 'react';
import FlameIcon from './FlameIcon';

export default function RidgeDivider() {
  return (
    <div className="flex items-center justify-center my-4 opacity-40">
      <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#B83D2D]"></div>
      <div className="mx-3">
        <FlameIcon className="w-3 h-3" />
      </div>
      <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#B83D2D]"></div>
    </div>
  );
}