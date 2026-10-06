import React from 'react';

export default function FlameIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C12 2 7 7.5 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 7.5 12 2 12 2Z" fill="#B83D2D"/>
      <path d="M12 7C12 7 9.5 10 9.5 12.5C9.5 13.8807 10.6193 15 12 15C13.3807 15 14.5 13.8807 14.5 12.5C14.5 10 12 7 12 7Z" fill="#E09526"/>
    </svg>
  );
}