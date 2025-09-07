export function cn(...values: any[]) {
  return values
    .flatMap(v => (typeof v === 'string' ? v : Array.isArray(v) ? v : Object.entries(v || {}).filter(([, val]) => !!val).map(([k]) => k)))
    .filter(Boolean)
    .join(' ');
}
