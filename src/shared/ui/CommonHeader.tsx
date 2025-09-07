"use client";
import React from 'react';
import Link from 'next/link';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { cn } from '@/shared/lib/cn';
import type { Route } from 'next';
import { usePathname } from 'next/navigation';

// Dropdown Category & Items definition
interface NavCategory {
  id: string;
  label: string;
  items: { label: string; href: Route }[];
}

const categories: NavCategory[] = [
  {
    id: 'tree',
    label: '트리 메뉴',
    items: [
      { label: '기본 트리', href: '/docs/widgets/tree/basic' as Route },
      { label: '가상화 트리', href: '/docs/widgets/tree/virtual' as Route },
      { label: '드래그앤드롭 트리', href: '/docs/widgets/tree/dnd' as Route },
    ],
  },
  {
    id: 'grid',
    label: '그리드 테이블',
    items: [
      { label: '기본 그리드', href: '/docs/widgets/grid/basic' as Route },
      { label: '가상화 그리드', href: '/docs/widgets/grid/virtual' as Route },
      { label: '인라인 편집 그리드', href: '/docs/widgets/grid/inline-edit' as Route },
    ],
  },
  {
    id: 'auth',
    label: '인증 / 인가',
    items: [
      { label: '로그인', href: '/docs/widgets/auth/login' as Route },
      { label: '회원가입', href: '/docs/widgets/auth/register' as Route },
      { label: '권한 관리', href: '/docs/widgets/auth/roles' as Route },
    ],
  },
  {
    id: 'form',
    label: '폼',
    items: [
      { label: '기본 폼', href: '/docs/widgets/forms/basic' as Route },
      { label: '폼 검증', href: '/docs/widgets/forms/validation' as Route },
      { label: '다단계 폼', href: '/docs/widgets/forms/multi-step' as Route },
    ],
  },
  {
    id: 'chart',
    label: '차트',
    items: [
      { label: '라인 차트', href: '/docs/widgets/charts/line' as Route },
      { label: '바 차트', href: '/docs/widgets/charts/bar' as Route },
      { label: '대시보드', href: '/docs/widgets/charts/dashboard' as Route },
    ],
  },
  {
    id: 'i18n',
    label: '다국어',
    items: [
      { label: '다국어 설정', href: '/docs/widgets/i18n/setup' as Route },
      { label: '다국어 데모', href: '/docs/widgets/i18n/demo' as Route },
    ],
  },
  {
    id: 'font',
    label: '폰트 & 아이콘',
    items: [
      { label: '타이포그래피', href: '/docs/widgets/style/typography' as Route },
      { label: '아이콘', href: '/docs/widgets/style/icons' as Route },
    ],
  },
  {
    id: 'layout',
    label: '레이아웃',
    items: [
      { label: '사이드바 레이아웃', href: '/docs/widgets/layout/sidebar' as Route },
      { label: '대시보드 레이아웃', href: '/docs/widgets/layout/dashboard' as Route },
    ],
  },
  {
    id: 'anim',
    label: '애니메이션',
    items: [
      { label: '기본 애니메이션', href: '/docs/widgets/animation/basic' as Route },
      { label: '고급 애니메이션', href: '/docs/widgets/animation/advanced' as Route },
    ],
  },
  {
    id: 'notify',
    label: '알림',
    items: [
      { label: '토스트 알림', href: '/docs/widgets/notify/toast' as Route },
      { label: '모달 알림', href: '/docs/widgets/notify/modal' as Route },
    ],
  },
  {
    id: 'pilot',
    label: '파일럿',
    items: [
      { label: '실험적 기능', href: '/docs/widgets/pilot/experimental' as Route },
      { label: '프로토타입', href: '/docs/widgets/pilot/prototype' as Route },
    ],
  },
];

const mainLinks: { href: Route; label: string }[] = [
  { href: '/components/button' as Route, label: '공통 컴포넌트' },
];

export function CommonHeader() {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="border-b border-border bg-bg sticky top-0 z-40">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-8">
                <Link href={'/' as Route} className="text-lg font-semibold">Admin UI</Link>
                <div className="hidden md:flex items-center gap-6">
                  {mainLinks.map(l => (
                    <Link key={l.href} href={l.href} className={cn('text-sm', pathname.startsWith(l.href) && 'font-semibold text-primary')}>{l.label}</Link>
                  ))}
                  <Menu as="div" className="relative">
                    <Menu.Button className="flex items-center gap-1 text-sm hover:underline">
                      위젯 <ChevronDownIcon className="h-4 w-4" />
                    </Menu.Button>
                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 mt-2 w-[640px] origin-top-left rounded-md border border-border bg-bg p-4 shadow-xl grid grid-cols-2 gap-4 text-sm">
                        {categories.map(cat => (
                          <div key={cat.id} className="space-y-2">
                            <div className="font-semibold text-gray-700">{cat.label}</div>
                            <ul className="space-y-1">
                              {cat.items.map(it => (
                                <li key={it.href}>
                                  <Link href={it.href} className="block rounded px-2 py-1 hover:bg-muted">
                                    {it.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Menu as="div" className="relative">
                  <Menu.Button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-medium">
                    <span className="sr-only">사용자 메뉴</span>
                    <span className="select-none">U</span>
                  </Menu.Button>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md border border-border bg-bg shadow focus:outline-none">
                      <div className="py-1 text-sm">
                        <Menu.Item>{({ active }) => <button className={cn('w-full px-3 py-2 text-left', active && 'bg-muted')}>프로필</button>}</Menu.Item>
                        <Menu.Item>{({ active }) => <button className={cn('w-full px-3 py-2 text-left', active && 'bg-muted')}>설정</button>}</Menu.Item>
                        <div className="my-1 border-t border-border" />
                        <Menu.Item>{({ active }) => <button className={cn('w-full px-3 py-2 text-left text-danger', active && 'bg-muted')}>로그아웃</button>}</Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <div className="md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-fg hover:bg-muted focus:outline-none">
                    <span className="sr-only">메뉴 열기</span>
                    {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden border-t border-border">
            <div className="px-4 py-4 space-y-4 text-sm">
              {mainLinks.map(l => (
                <Link key={l.href} href={l.href} className="block rounded px-3 py-2 hover:bg-muted">{l.label}</Link>
              ))}
              <div>
                <div className="font-semibold mb-2">위젯</div>
                <div className="grid grid-cols-2 gap-4">
                  {categories.map(cat => (
                    <div key={cat.id} className="space-y-1">
                      <div className="text-xs font-medium text-gray-600">{cat.label}</div>
                      {cat.items.map(it => (
                        <Link key={it.href} href={it.href} className="block rounded px-2 py-1 hover:bg-muted">{it.label}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default CommonHeader;
