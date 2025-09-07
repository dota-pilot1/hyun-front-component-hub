import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold mb-6">Admin UI</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/components/button" className="rounded-lg border border-border bg-white p-6 shadow-sm hover:shadow">
            <div className="text-lg font-medium mb-1">컴포넌트 관리</div>
            <p className="text-sm text-gray-600">공통 컴포넌트 원본/사용을 페이지별로 관리합니다.</p>
          </Link>
          <Link href="/components/source" className="rounded-lg border border-border bg-white p-6 shadow-sm hover:shadow">
            <div className="text-lg font-medium mb-1">라이브러리 관리</div>
            <p className="text-sm text-gray-600">UI 라이브러리 소스 파일을 한 곳에서 확인/복사합니다.</p>
          </Link>
          <Link href="/boilerplate" className="rounded-lg border border-border bg-white p-6 shadow-sm hover:shadow">
            <div className="text-lg font-medium mb-1">보일러플레이트</div>
            <p className="text-sm text-gray-600">프로젝트 시작을 위한 기본 템플릿 가이드.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
