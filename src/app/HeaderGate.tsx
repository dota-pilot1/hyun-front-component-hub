"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import CommonHeader from '@/shared/ui/CommonHeader';

const HIDE_ON_PATH_PREFIX = ['/login', '/signup', '/reset', '/auth'];

export default function HeaderGate() {
  const pathname = usePathname();
  const shouldHide = HIDE_ON_PATH_PREFIX.some((p) => pathname.startsWith(p));
  if (shouldHide) return null;
  return <CommonHeader />;
}
