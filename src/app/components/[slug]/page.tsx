import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import { componentsRegistry, type ComponentSlug } from '@/shared/data/componentsRegistry';
import SourceUsage from '@/shared/ui/SourceUsage';
import ComponentsNav from '@/shared/ui/ComponentsNav';
import {
  ButtonsUsage, InputsUsage, SelectUsage, RadioUsage, ToggleUsage, ModalUsage, BadgeUsage, CardUsage, TabsUsage, FormPrimitivesUsage,
  buttonsUsageCode, inputsUsageCode, selectUsageCode, radioUsageCode, toggleUsageCode, modalUsageCode, badgeUsageCode, cardUsageCode, tabsUsageCode, formUsageCode
} from '@/app/components/basic/usages';

const previewMap: Record<ComponentSlug, React.ReactNode> = {
  button: <ButtonsUsage />,
  input: <InputsUsage />,
  select: <SelectUsage />,
  radio: <RadioUsage />,
  toggle: <ToggleUsage />,
  modal: <ModalUsage />,
  badge: <BadgeUsage />,
  card: <CardUsage />,
  tabs: <TabsUsage />,
  form: <FormPrimitivesUsage />,
};

const usageCodeMap: Record<ComponentSlug, string> = {
  button: buttonsUsageCode,
  input: inputsUsageCode,
  select: selectUsageCode,
  radio: radioUsageCode,
  toggle: toggleUsageCode,
  modal: modalUsageCode,
  badge: badgeUsageCode,
  card: cardUsageCode,
  tabs: tabsUsageCode,
  form: formUsageCode,
};

async function read(rel: string) {
  try { return await fs.readFile(path.join(process.cwd(), rel), 'utf-8'); }
  catch { return `/* 파일을 읽을 수 없습니다: ${rel} */`; }
}

export default async function ComponentPage({ params }: { params: { slug: ComponentSlug } }) {
  const meta = componentsRegistry.find(c => c.slug === params.slug);
  if (!meta) return notFound();
  const source = await read(meta.file);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-10 flex gap-10">
        <aside className="w-64 shrink-0 hidden lg:block">
          <div className="sticky top-4 bg-white border rounded-lg p-4 max-h-[80vh] overflow-auto">
            <h2 className="text-sm font-semibold mb-3 text-gray-700">Components</h2>
            <ComponentsNav />
          </div>
        </aside>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">{meta.title}</h1>
          <SourceUsage id={meta.slug} title={`${meta.title} — ${meta.file}`} source={source} preview={previewMap[meta.slug]} usageCode={usageCodeMap[meta.slug]} />
        </div>
      </div>
    </div>
  );
}
