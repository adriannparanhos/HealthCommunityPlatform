"use client";

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-primary-hover",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-surface"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`} {...props}>
      {children}
    </button>
  );
}