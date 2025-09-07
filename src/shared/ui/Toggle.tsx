"use client";
import React from 'react';
import { Switch } from '@headlessui/react';
import { cn } from '@/shared/lib/cn';

export interface ToggleProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: string;
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({ checked, onChange, label, className }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {label && <span className="text-sm text-gray-700">{label}</span>}
      <Switch
        checked={checked}
        onChange={onChange}
        className={cn(
          'relative inline-flex h-5 w-10 items-center rounded-full transition',
          checked ? 'bg-primary' : 'bg-muted'
        )}
      >
        <span
          className={cn(
            'inline-block h-4 w-4 transform rounded-full bg-white transition',
            checked ? 'translate-x-5' : 'translate-x-1'
          )}
        />
      </Switch>
    </div>
  );
};

export default Toggle;

