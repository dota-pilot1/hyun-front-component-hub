"use client";
import { useState } from 'react';
import { login } from '../api/login';

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  async function submit(email: string, password: string) {
    setLoading(true);
    try {
      const result = await login({ email, password });
      if (result.success && result.token) {
        setToken(result.token);
        try { localStorage.setItem('demo_token', result.token); } catch {}
        console.log('Mock login success token=', result.token);
      }
    } finally {
      setLoading(false);
    }
  }

  return { submit, loading, token };
}
