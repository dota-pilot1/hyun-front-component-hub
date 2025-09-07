import * as React from 'react';
import { cn } from '@/shared/lib/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, type = 'text', label, error, ...props }, ref
) {
  return (
    <div className="w-full space-y-1">
      {label && <label className="block text-sm font-medium">{label}</label>}
      <input
        ref={ref}
        type={type}
        className={cn(
          'w-full rounded-md border border-border bg-bg px-3 h-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary',
          error && 'border-danger focus:ring-danger',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  );
});
