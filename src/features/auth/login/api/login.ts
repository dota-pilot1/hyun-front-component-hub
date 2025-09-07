// Fake login API (replace with real fetch later)
export interface LoginPayload { email: string; password: string; }
export interface LoginResult { success: boolean; token?: string; error?: string; }

// 현재 단계: 어떤 자격 증명이든 성공 처리 (UI 개발 전용 Mock)
// 나중에 실제 인증 구현 시 조건 검증/해시 비교로 교체
export async function login(payload: LoginPayload): Promise<LoginResult> {
  await new Promise(r => setTimeout(r, 200)); // 약간의 딜레이로 비동기 느낌 유지
  return {
    success: true,
    token: 'mock-token-' + Buffer.from(payload.email || 'guest').toString('base64')
  };
}
