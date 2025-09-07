"use client";
import React, { useState } from 'react';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useLogin } from '../model/useLogin';
import { Modal } from '@/shared/ui/Modal';

export const LoginForm: React.FC = () => {
  const { submit, loading, token } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showHelp, setShowHelp] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await submit(email, password);
  }

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-4">
        <Input label="이메일" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
        <Input label="비밀번호" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••" />
  {token && <p className="text-xs text-green-600">로그인 성공 (mock)</p>}
        <div className="flex items-center justify-between text-xs">
          <button type="button" onClick={() => setShowHelp(true)} className="text-primary hover:underline">도움?</button>
        </div>
        <Button type="submit" className="w-full" loading={loading}>로그인</Button>
      </form>
      <Modal open={showHelp} onClose={() => setShowHelp(false)} title="도움">
        테스트 계정: admin@example.com / admin
      </Modal>
    </>
  );
};
