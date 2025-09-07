import { LoginForm } from '@/features/auth/login/ui/LoginForm';

export const metadata = { title: 'Login' };

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-6 text-center">로그인</h1>
        <LoginForm />
        <p className="text-xs text-center text-muted mt-6">© {new Date().getFullYear()} Admin</p>
      </div>
    </div>
  );
}
