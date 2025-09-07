"use client";
import React from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { cn } from '@/shared/lib/cn';

export interface SelectOption<T extends string | number> {
  label: string;
  value: T;
}

export interface SelectProps<T extends string | number> {
  value: T;
  onChange: (v: T) => void;
  options: SelectOption<T>[];
  placeholder?: string;
  className?: string;
}

export function Select<T extends string | number>({ value, onChange, options, placeholder = '선택...', className }: SelectProps<T>) {
  const selected = options.find(o => o.value === value) || null;
  return (
    <Listbox value={value} onChange={onChange}>
      <div className={cn('relative', className)}>
        <Listbox.Button className="relative w-full h-10 cursor-default rounded-md border border-border bg-bg pl-3 pr-9 text-left text-sm focus:outline-none focus:ring-2 focus:ring-primary">
          <span className={cn('block truncate', !selected && 'text-gray-400')}>{selected ? selected.label : placeholder}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">▾</span>
        </Listbox.Button>
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-border bg-bg py-1 text-sm shadow-lg focus:outline-none">
            {options.map(opt => (
              <Listbox.Option
                key={String(opt.value)}
                value={opt.value}
                className={({ active }) => cn('cursor-default select-none px-3 py-2', active && 'bg-muted')}
              >
                {({ selected }) => (
                  <span className={cn('block truncate', selected && 'font-medium')}>{opt.label}</span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

export default Select;

