import { DemoSection } from '@/shared/ui/DemoSection';
import { CodeBlock } from '@/shared/ui/CodeBlock';
import path from 'path';
import fs from 'fs/promises';

type SourceFile = { id: string; title: string; path: string };

async function readFile(relPath: string) {
  const full = path.join(process.cwd(), relPath);
  try {
    return await fs.readFile(full, 'utf-8');
  } catch (e) {
    return `/* 파일을 읽을 수 없습니다: ${relPath} */`;
  }
}

export default async function SourcePage() {
  const files: SourceFile[] = [
    { id: 'button', title: 'Button', path: 'src/shared/ui/Button.tsx' },
    { id: 'input', title: 'Input', path: 'src/shared/ui/Input.tsx' },
    { id: 'modal', title: 'Modal', path: 'src/shared/ui/Modal.tsx' },
    { id: 'badge', title: 'Badge', path: 'src/shared/ui/Badge.tsx' },
    { id: 'card', title: 'Card', path: 'src/shared/ui/Card.tsx' },
    { id: 'toggle', title: 'Toggle (Switch)', path: 'src/shared/ui/Toggle.tsx' },
    { id: 'select', title: 'Select (Listbox)', path: 'src/shared/ui/Select.tsx' },
    { id: 'radio', title: 'Radio (RadioGroup)', path: 'src/shared/ui/Radio.tsx' },
    { id: 'tabs', title: 'Tabs', path: 'src/shared/ui/Tabs.tsx' },
    { id: 'form', title: 'Form primitives', path: 'src/shared/ui/Form.tsx' },
    { id: 'codeblock', title: 'CodeBlock', path: 'src/shared/ui/CodeBlock.tsx' },
    { id: 'header', title: 'CommonHeader', path: 'src/shared/ui/CommonHeader.tsx' },
    { id: 'treenav', title: 'TreeNav', path: 'src/shared/ui/TreeNav.tsx' },
    { id: 'hook-active', title: 'useActiveSection', path: 'src/shared/hooks/useActiveSection.ts' },
    { id: 'cn', title: 'cn util', path: 'src/shared/lib/cn.ts' },
  ];

  const contents = await Promise.all(files.map(f => readFile(f.path)));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-10 flex gap-10">
        <aside className="w-64 shrink-0 hidden lg:block">
          <div className="sticky top-4 bg-white border rounded-lg p-4 max-h-[80vh] overflow-auto">
            <h2 className="text-sm font-semibold mb-3 text-gray-700">소스 파일</h2>
            <nav className="space-y-1 text-sm">
              {files.map((f) => (
                <a key={f.id} href={`#${f.id}`} className="block rounded px-2 py-1 hover:bg-muted">
                  {f.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-6">공통 컴포넌트 원본 코드</h1>
          <p className="text-sm text-gray-600 mb-6">아래 코드 블록을 그대로 복사해 사용하세요.</p>
          {files.map((f, i) => (
            <DemoSection key={f.id} id={f.id} title={`${f.title} — ${f.path}`} code={contents[i]}>
              <div className="text-xs text-gray-600">원본 파일: {f.path}</div>
            </DemoSection>
          ))}
        </div>
      </div>
    </div>
  );
}

