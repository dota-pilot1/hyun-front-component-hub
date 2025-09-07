"use client";
import React from 'react';
import { cn } from '@/shared/lib/cn';

const base = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-colors';

const variantStyles: Record<string, string> = {
  solid: 'bg-primary text-white hover:bg-primary/90',
  outline: 'border border-border text-fg hover:bg-muted',
  ghost: 'text-fg hover:bg-muted',
  danger: 'bg-danger text-white hover:bg-danger/90'
};
const sizeStyles: Record<string, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-9 px-4 text-sm',
  lg: 'h-10 px-6 text-base'
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'solid', size = 'md', className, loading, children, ...rest }) => {
  return (
    <button className={cn(base, variantStyles[variant], sizeStyles[size], className)} disabled={loading || rest.disabled} {...rest}>
      {loading && <span className="mr-2 inline-block h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />}
      {children}
    </button>
  );
};
