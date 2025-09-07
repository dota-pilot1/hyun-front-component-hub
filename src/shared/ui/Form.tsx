import * as React from 'react';
import { cn } from '@/shared/lib/cn';

export const Form: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = ({ className, ...props }) => (
  <form className={cn('space-y-4', className)} {...props} />
);

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  description?: string;
  error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({ label, description, error, className, children, ...rest }) => (
  <div className={cn('space-y-1', className)} {...rest}>
    {label && <label className="block text-sm font-medium text-gray-800">{label}</label>}
    {children}
    {description && !error && <p className="text-xs text-gray-500">{description}</p>}
    {error && <p className="text-xs text-danger">{error}</p>}
  </div>
);

export const FormSection: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn('rounded-lg border border-border bg-white p-6 shadow-sm', className)} {...props} />
);

export const FormActions: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn('flex gap-2 pt-2', className)} {...props} />
);

