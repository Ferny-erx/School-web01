import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variants = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/10 hover:shadow-xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/10',
  secondary: 'bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50',
  outline: 'border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'rounded-xl font-medium inline-flex items-center justify-center transition-all duration-300',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};