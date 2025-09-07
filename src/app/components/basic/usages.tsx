"use client";
import React, { useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { Badge } from '@/shared/ui/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/shared/ui/Card';
import { Toggle } from '@/shared/ui/Toggle';
import { Select } from '@/shared/ui/Select';
import { Radio } from '@/shared/ui/Radio';
import { Tabs } from '@/shared/ui/Tabs';
import { Form, FormField, FormSection, FormActions } from '@/shared/ui/Form';

export function ButtonsUsage() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>기본</Button>
      <Button variant="outline">아웃라인</Button>
      <Button variant="danger">위험</Button>
    </div>
  );
}
export const buttonsUsageCode = `import { Button } from '@/shared/ui/Button';

export function Example() {
  return (
    <>
      <Button>기본</Button>
      <Button variant="outline">아웃라인</Button>
      <Button variant="danger">위험</Button>
    </>
  );
}`;

export function InputsUsage() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const validate = () => setError(value.length < 3 ? '최소 3글자 이상 입력해주세요' : '');
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Input label="이름" placeholder="홍길동" value={value} onChange={(e) => setValue(e.target.value)} onBlur={validate} />
      <Input label="검증 예제" placeholder="최소 3글자 입력" value={value} error={error} onChange={(e) => setValue(e.target.value)} onBlur={validate} />
    </div>
  );
}
export const inputsUsageCode = `import { Input } from '@/shared/ui/Input';
import React, { useState } from 'react';

export function Example() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const validate = () => setError(value.length < 3 ? '최소 3글자 이상 입력해주세요' : '');
  return (
    <>
      <Input label="이름" value={value} onChange={(e)=>setValue(e.target.value)} onBlur={validate} />
      <Input label="검증 예제" value={value} error={error} onChange={(e)=>setValue(e.target.value)} onBlur={validate} />
    </>
  );
}`;

export function SelectUsage() {
  const [role, setRole] = useState<'admin' | 'editor' | 'viewer'>('admin');
  return (
    <div className="max-w-sm">
      <Select value={role} onChange={setRole} options={[{ label: '관리자', value: 'admin' }, { label: '에디터', value: 'editor' }, { label: '뷰어', value: 'viewer' }]} />
    </div>
  );
}
export const selectUsageCode = `import { Select } from '@/shared/ui/Select';
import React, { useState } from 'react';

export function Example() {
  const [role, setRole] = useState<'admin'|'editor'|'viewer'>('admin');
  return <Select value={role} onChange={setRole} options={[{label:'관리자',value:'admin'},{label:'에디터',value:'editor'},{label:'뷰어',value:'viewer'}]} />
}`;

export function RadioUsage() {
  const [plan, setPlan] = useState<'free' | 'pro' | 'enterprise'>('free');
  return (
    <div className="max-w-md">
      <Radio value={plan} onChange={setPlan} options={[{ label: 'Free', value: 'free', description: '기본 기능' }, { label: 'Pro', value: 'pro', description: '팀 협업' }, { label: 'Enterprise', value: 'enterprise', description: '보안/통제' }]} />
    </div>
  );
}
export const radioUsageCode = `import { Radio } from '@/shared/ui/Radio';
import React, { useState } from 'react';

export function Example() {
  const [plan, setPlan] = useState<'free'|'pro'|'enterprise'>('free');
  return <Radio value={plan} onChange={setPlan} options={[{label:'Free', value:'free'},{label:'Pro',value:'pro'},{label:'Enterprise', value:'enterprise'}]} />
}`;

export function ToggleUsage() {
  const [checked, setChecked] = useState(false);
  return <Toggle checked={checked} onChange={setChecked} label="데모" />;
}
export const toggleUsageCode = `import { Toggle } from '@/shared/ui/Toggle';
import React, { useState } from 'react';

export function Example() {
  const [checked, setChecked] = useState(false);
  return <Toggle checked={checked} onChange={setChecked} label="데모" />
}`;

export function ModalUsage() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>모달 열기</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="모달">
        모달 내용입니다.
      </Modal>
    </div>
  );
}
export const modalUsageCode = `import { Modal } from '@/shared/ui/Modal';
import { Button } from '@/shared/ui/Button';
import React, { useState } from 'react';

export function Example() {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={()=>setOpen(true)}>모달 열기</Button>
    <Modal open={open} onClose={()=>setOpen(false)} title="모달">모달 내용입니다.</Modal>
  </>
}`;

export function BadgeUsage() {
  return (
    <div className="flex gap-2">
      <Badge>기본</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  );
}
export const badgeUsageCode = `import { Badge } from '@/shared/ui/Badge';

export function Example() {
  return <>
    <Badge>기본</Badge>
    <Badge variant="primary">Primary</Badge>
    <Badge variant="danger">Danger</Badge>
  </>
}`;

export function CardUsage() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>제목</CardTitle>
      </CardHeader>
      <CardContent>내용</CardContent>
    </Card>
  );
}
export const cardUsageCode = `import { Card, CardHeader, CardTitle, CardContent } from '@/shared/ui/Card';

export function Example() {
  return (
    <Card>
      <CardHeader><CardTitle>제목</CardTitle></CardHeader>
      <CardContent>내용</CardContent>
    </Card>
  );
}`;

export function TabsUsage() {
  return (
    <div className="max-w-xl">
      <Tabs tabs={[{ id: 'a', label: 'A', content: <div className="text-sm">A 콘텐츠</div> }, { id: 'b', label: 'B', content: <div className="text-sm">B 콘텐츠</div> }]} />
    </div>
  );
}
export const tabsUsageCode = `import { Tabs } from '@/shared/ui/Tabs';

export function Example() {
  return <Tabs tabs={[{id:'a',label:'A',content:<div>A</div>},{id:'b',label:'B',content:<div>B</div>}]} />
}`;

export function FormPrimitivesUsage() {
  const [role, setRole] = useState<'admin' | 'editor' | 'viewer'>('admin');
  return (
    <FormSection className="max-w-md">
      <CardHeader>
        <CardTitle>사용자 정보</CardTitle>
      </CardHeader>
      <CardContent>
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormField label="이름">
            <Input placeholder="홍길동" />
          </FormField>
          <FormField label="역할">
            <Select value={role} onChange={setRole} options={[{ label: '관리자', value: 'admin' }, { label: '에디터', value: 'editor' }, { label: '뷰어', value: 'viewer' }]} />
          </FormField>
          <FormActions>
            <Button type="submit">저장</Button>
          </FormActions>
        </Form>
      </CardContent>
    </FormSection>
  );
}
export const formUsageCode = `import { Form, FormField, FormSection, FormActions } from '@/shared/ui/Form';
import { Input } from '@/shared/ui/Input';
import { Select } from '@/shared/ui/Select';
import { Button } from '@/shared/ui/Button';
import React, { useState } from 'react';

export function Example() {
  const [role, setRole] = useState<'admin'|'editor'|'viewer'>('admin');
  return (
    <FormSection>
      <Form onSubmit={(e)=>e.preventDefault()}>
        <FormField label="이름"><Input /></FormField>
        <FormField label="역할"><Select value={role} onChange={setRole} options={[{label:'관리자',value:'admin'},{label:'에디터',value:'editor'},{label:'뷰어',value:'viewer'}]} /></FormField>
        <FormActions><Button type="submit">저장</Button></FormActions>
      </Form>
    </FormSection>
  );
}`;
