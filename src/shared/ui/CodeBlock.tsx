"use client";
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/shared/lib/cn';

export interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'tsx', title, className }) => {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement | null>(null);
  useEffect(() => {
    const el = preRef.current;
    try {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.Prism && el) {
        // @ts-ignore
        window.Prism.highlightAllUnder(el.parentElement);
      }
    } catch {}
  }, [code, language]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      try {
        const el = document.createElement('textarea');
        el.value = code;
        el.style.position = 'fixed';
        el.style.opacity = '0';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      } catch {}
    }
  }

  return (
    <div className={cn('relative rounded-lg border border-border bg-muted/50', className)}>
      {(title || language) && (
        <div className="flex items-center justify-between px-3 py-2 text-xs text-gray-600">
          <span className="font-medium">{title || 'Example'}</span>
          <span className="uppercase">{language}</span>
        </div>
      )}
      <pre ref={preRef} className="overflow-x-auto p-3 text-sm text-gray-700">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button
        type="button"
        onClick={copy}
        className="absolute right-2 top-2 rounded-md border border-border bg-white/80 px-2 py-1 text-xs hover:bg-white"
      >
        {copied ? '복사됨' : '복사'}
      </button>
    </div>
  );
};

export default CodeBlock;
