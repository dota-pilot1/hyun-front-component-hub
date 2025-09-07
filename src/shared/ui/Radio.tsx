"use client";
import React from 'react';
import { RadioGroup } from '@headlessui/react';
import { cn } from '@/shared/lib/cn';

export interface RadioOption<T extends string | number> {
  label: string;
  value: T;
  description?: string;
}

export interface RadioProps<T extends string | number> {
  value: T;
  onChange: (v: T) => void;
  options: RadioOption<T>[];
  className?: string;
}

export function Radio<T extends string | number>({ value, onChange, options, className }: RadioProps<T>) {
  return (
    <RadioGroup value={value} onChange={onChange} className={cn('space-y-2', className)}>
      {options.map(opt => (
        <RadioGroup.Option key={String(opt.value)} value={opt.value} className={({ checked }) => cn('cursor-pointer rounded-md border p-3', checked ? 'border-primary bg-primary/5' : 'border-border bg-bg')}>
          {({ checked }) => (
            <div className="flex items-start gap-3">
              <div className={cn('mt-1 h-4 w-4 rounded-full border', checked ? 'border-primary ring-4 ring-primary/30' : 'border-border')} />
              <div>
                <div className="text-sm font-medium">{opt.label}</div>
                {opt.description && <div className="text-xs text-gray-600">{opt.description}</div>}
              </div>
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}

export default Radio;

