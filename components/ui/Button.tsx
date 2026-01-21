import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-mono font-medium transition-all duration-200 flex items-center justify-between px-6 py-4 uppercase tracking-wider text-sm";
  
  const variants = {
    primary: "bg-accent text-black hover:bg-white",
    ghost: "bg-transparent text-gray-400 hover:text-white border border-gray-800",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <span className="ml-4 text-lg">»</span>
    </button>
  );
};

export default Button;
