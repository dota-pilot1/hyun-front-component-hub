"use client";
import React from 'react';
import { Tab } from '@headlessui/react';
import { cn } from '@/shared/lib/cn';

export interface TabsProps {
  tabs: { id: string; label: string; content: React.ReactNode }[];
  defaultIndex?: number;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultIndex = 0, className }) => {
  return (
    <Tab.Group defaultIndex={defaultIndex}>
      <div className={cn('w-full', className)}>
        <Tab.List className="flex gap-2 border-b border-border">
          {tabs.map((t) => (
            <Tab key={t.id} className={({ selected }) => cn('px-3 py-2 text-sm', selected ? 'border-b-2 border-primary font-medium' : 'text-gray-600 hover:text-gray-800')}>
              {t.label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="pt-4">
          {tabs.map((t) => (
            <Tab.Panel key={t.id}>{t.content}</Tab.Panel>
          ))}
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default Tabs;

