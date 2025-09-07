export type ComponentSlug =
  | 'button'
  | 'input'
  | 'select'
  | 'radio'
  | 'toggle'
  | 'modal'
  | 'badge'
  | 'card'
  | 'tabs'
  | 'form';

export interface ComponentMeta {
  slug: ComponentSlug;
  title: string;
  file: string;
  language?: string;
}

export const componentsRegistry: ComponentMeta[] = [
  { slug: 'button', title: 'Button', file: 'src/shared/ui/Button.tsx', language: 'tsx' },
  { slug: 'input', title: 'Input', file: 'src/shared/ui/Input.tsx', language: 'tsx' },
  { slug: 'select', title: 'Select (Listbox)', file: 'src/shared/ui/Select.tsx', language: 'tsx' },
  { slug: 'radio', title: 'RadioGroup', file: 'src/shared/ui/Radio.tsx', language: 'tsx' },
  { slug: 'toggle', title: 'Toggle (Switch)', file: 'src/shared/ui/Toggle.tsx', language: 'tsx' },
  { slug: 'modal', title: 'Modal (Dialog)', file: 'src/shared/ui/Modal.tsx', language: 'tsx' },
  { slug: 'badge', title: 'Badge', file: 'src/shared/ui/Badge.tsx', language: 'tsx' },
  { slug: 'card', title: 'Card', file: 'src/shared/ui/Card.tsx', language: 'tsx' },
  { slug: 'tabs', title: 'Tabs', file: 'src/shared/ui/Tabs.tsx', language: 'tsx' },
  { slug: 'form', title: 'Form Primitives', file: 'src/shared/ui/Form.tsx', language: 'tsx' },
];

