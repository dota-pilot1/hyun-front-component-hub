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
import { DemoSection } from '@/shared/ui/DemoSection';
import { CodeBlock } from '@/shared/ui/CodeBlock';

export default function BasicDemosClient() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [role, setRole] = useState<'admin' | 'editor' | 'viewer'>('admin');
  const [plan, setPlan] = useState<'free' | 'pro' | 'enterprise'>('free');
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  const validateInput = () => {
    if (inputValue.length < 3) setInputError('최소 3글자 이상 입력해주세요');
    else setInputError('');
  };

  return (
    <div className="flex-1">
      <DemoSection title="Button" code={`<Button>기본</Button>\n<Button variant=\"outline\">아웃라인</Button>\n<Button variant=\"danger\">위험</Button>`}>
        <div className="flex flex-wrap gap-2">
          <Button>기본</Button>
          <Button variant="outline">아웃라인</Button>
          <Button variant="danger">위험</Button>
        </div>
      </DemoSection>

      <DemoSection title="Input" code={`<Input label=\"이름\" placeholder=\"홍길동\" />`}>
        <div className="grid md:grid-cols-2 gap-6">
          <Input label="이름" placeholder="홍길동" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onBlur={validateInput} />
          <Input label="검증 예제" placeholder="최소 3글자 입력" value={inputValue} error={inputError} onChange={(e) => setInputValue(e.target.value)} onBlur={validateInput} />
        </div>
      </DemoSection>

      <DemoSection title="Select (Listbox)" code={`<Select value={value} onChange={setValue} options={[{ label: '관리자', value: 'admin' }]} />`}>
        <div className="max-w-sm">
          <Select value={role} onChange={setRole} options={[{ label: '관리자', value: 'admin' }, { label: '에디터', value: 'editor' }, { label: '뷰어', value: 'viewer' }]} />
        </div>
      </DemoSection>

      <DemoSection title="RadioGroup" code={`<Radio value={plan} onChange={setPlan} options={[{ label: 'Free', value: 'free' }]} />`}>
        <div className="max-w-md">
          <Radio value={plan} onChange={setPlan} options={[{ label: 'Free', value: 'free', description: '기본 기능' }, { label: 'Pro', value: 'pro', description: '팀 협업' }, { label: 'Enterprise', value: 'enterprise', description: '보안/통제' }]} />
        </div>
      </DemoSection>

      <DemoSection title="Toggle (Switch)" code={`<Toggle checked={checked} onChange={setChecked} label=\"데모\" />`}>
        <Toggle checked={checked} onChange={setChecked} label="데모" />
      </DemoSection>

      <DemoSection title="Modal" code={`<Modal open={open} onClose={() => setOpen(false)} title=\"모달\">내용</Modal>`}>
        <Button onClick={() => setOpen(true)}>모달 열기</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="모달">
          모달 내용입니다.
        </Modal>
      </DemoSection>

      <DemoSection title="Badge" code={`<Badge>기본</Badge>\n<Badge variant=\"primary\">Primary</Badge>`}>
        <div className="flex gap-2">
          <Badge>기본</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
      </DemoSection>

      <DemoSection title="Card" code={`<Card><CardHeader><CardTitle>제목</CardTitle></CardHeader><CardContent>내용</CardContent></Card>`}>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>제목</CardTitle>
          </CardHeader>
          <CardContent>내용</CardContent>
        </Card>
      </DemoSection>

      <DemoSection title="Tabs" code={`<Tabs tabs={[{ id: 'a', label: 'A', content: <div>A</div> }]} />`}>
        <div className="max-w-xl">
          <Tabs tabs={[{ id: 'a', label: 'A', content: <div className="text-sm">A 콘텐츠</div> }, { id: 'b', label: 'B', content: <div className="text-sm">B 콘텐츠</div> }]} />
        </div>
      </DemoSection>

      <DemoSection title="Form Primitives" code={`<Form><FormField label=\"이름\"><Input /></FormField><FormActions><Button>저장</Button></FormActions></Form>`}>
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
      </DemoSection>

      {/* Modal demo from top-level page keep for parity */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="모달 예제">
        <div className="space-y-4">
          <p>이것은 모달 컴포넌트의 예제입니다.</p>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setModalOpen(false)}>취소</Button>
            <Button onClick={() => setModalOpen(false)}>확인</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
