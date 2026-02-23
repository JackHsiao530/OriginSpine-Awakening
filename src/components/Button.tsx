import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'gold' | 'white' | 'ghost';
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyle = "px-8 py-3 font-bold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border";
  
  const variants = {
    primary: "bg-[#1A2B48] text-white border-[#1A2B48] hover:bg-white hover:text-[#1A2B48]",
    outline: "bg-transparent text-[#1A2B48] border-[#1A2B48] hover:bg-[#1A2B48] hover:text-white",
    gold: "bg-[#C5A059] text-white border-[#C5A059] hover:bg-[#1A2B48] hover:border-[#1A2B48]",
    white: "bg-white text-[#1A2B48] border-white hover:bg-[#1A2B48] hover:text-white hover:border-[#1A2B48]",
    ghost: "bg-transparent border-transparent text-[#1A2B48] hover:bg-gray-100"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
