"use client";
import React from 'react';
import { Tabs } from '@/shared/ui/Tabs';
import { CodeBlock } from '@/shared/ui/CodeBlock';

// New: explicit preview (실행 결과) + usageCode (사용 방법 코드) + source (컴포넌트 원본)
// Backward compatibility: if only `usage` prop is provided treat it as preview.
export interface SourceUsageProps {
  id: string;
  title: string;
  source: string;          // component implementation source
  preview?: React.ReactNode; // rendered live preview
  usageCode?: string;        // how to consume the component
  usage?: React.ReactNode;   // deprecated: old prop name for preview (kept temporarily)
  language?: string;         // language for code blocks (default tsx)
}

export const SourceUsage: React.FC<SourceUsageProps> = ({ id, title, source, preview, usageCode, usage, language = 'tsx' }) => {
  const effectivePreview = preview || usage; // fallback
  const tabs: { id: string; label: string; content: React.ReactNode }[] = [];

  // Order requested: 원본 -> 사용 예제 -> 미리 보기
  tabs.push({ id: `${id}-src`, label: '원본', content: <CodeBlock code={source} language={language} title="Source" /> });

  if (usageCode) {
    tabs.push({ id: `${id}-usage`, label: '사용 예제', content: <CodeBlock code={usageCode} language={language} title="Usage" /> });
  }
  if (effectivePreview) {
    tabs.push({ id: `${id}-preview`, label: '미리 보기', content: <div className="rounded-lg border border-border bg-white p-4 shadow-sm">{effectivePreview}</div> });
  }

  const defaultIndex = Math.max(0, tabs.findIndex(t => t.id === `${id}-preview`));
  return (
    <section id={id} className="mb-12">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <Tabs defaultIndex={defaultIndex} tabs={tabs} />
    </section>
  );
};

export default SourceUsage;
