"use client";
import React, { useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { CodeBlock } from './CodeBlock';

export interface DemoSectionProps {
  id?: string;
  title: string;
  code: string;
  children: React.ReactNode;
  description?: string;
  defaultOpen?: boolean;
}

export const DemoSection: React.FC<DemoSectionProps> = ({ id, title, code, children, description, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="mb-8" id={id}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <button onClick={() => setOpen(o => !o)} className="text-sm text-primary hover:underline">
          {open ? '코드 숨기기' : '코드 보기'}
        </button>
      </div>
      {description && <p className="text-sm text-gray-600 mb-3">{description}</p>}
      <div className="rounded-lg border border-border bg-white p-4 shadow-sm mb-3">
        {children}
      </div>
      <Transition
        show={open}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <CodeBlock code={code} />
      </Transition>
    </section>
  );
};

export default DemoSection;
