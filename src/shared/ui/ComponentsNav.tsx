"use client";
import React from 'react';
import Link from 'next/link';
import type { Route } from 'next';
import { usePathname } from 'next/navigation';
import { componentsRegistry } from '@/shared/data/componentsRegistry';

export default function ComponentsNav() {
  const pathname = usePathname();
  return (
    <nav className="space-y-1 text-sm">
      {componentsRegistry.map((c) => {
        const href = `/components/${c.slug}` as Route;
        const active = pathname === href;
        return (
          <Link key={c.slug} href={href} className={`block rounded px-2 py-1 ${active ? 'bg-primary text-white' : 'hover:bg-muted'}`}>
            {c.title}
          </Link>
        );
      })}
    </nav>
  );
}
