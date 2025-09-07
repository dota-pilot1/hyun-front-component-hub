export interface ComponentTreeItem {
  id: string;
  label: string;
  children?: ComponentTreeItem[];
  href?: string; // anchor link
}

export const componentTree: ComponentTreeItem[] = [
  {
    id: 'common',
    label: '공통 컴포넌트',
    children: [
      { id: 'buttons', label: 'Button', href: '#buttons' },
      { id: 'inputs', label: 'Input', href: '#inputs' },
      { id: 'select', label: 'Select', href: '#select' },
      { id: 'radio', label: 'RadioGroup', href: '#radio' },
      { id: 'toggle', label: 'Toggle', href: '#toggle' },
      { id: 'modals', label: 'Modal', href: '#modals' },
      { id: 'badges', label: 'Badge', href: '#badges' },
      { id: 'cards', label: 'Card', href: '#cards' },
      { id: 'tabs', label: 'Tabs', href: '#tabs' },
      { id: 'forms', label: 'Form Primitives', href: '#forms' },
    ]
  },
  {
    id: 'layout',
    label: '레이아웃 예제',
    children: [
      { id: 'layout-examples', label: 'Dashboard', href: '#layout-examples' },
      { id: 'form-layout', label: 'Form 레이아웃', href: '#form-layout' }
    ]
  }
];
