import React from 'react';
import ComponentsNav from '@/shared/ui/ComponentsNav';
import SourceUsage from '@/shared/ui/SourceUsage';
import { ButtonsUsage, InputsUsage, SelectUsage, RadioUsage, ToggleUsage, ModalUsage, BadgeUsage, CardUsage, TabsUsage, FormPrimitivesUsage, buttonsUsageCode, inputsUsageCode, selectUsageCode, radioUsageCode, toggleUsageCode, modalUsageCode, badgeUsageCode, cardUsageCode, tabsUsageCode, formUsageCode } from './usages';
import fs from 'fs/promises';
import path from 'path';
async function read(rel: string) {
  try { return await fs.readFile(path.join(process.cwd(), rel), 'utf-8'); }
  catch { return `/* 파일을 읽을 수 없습니다: ${rel} */`; }
}

export default async function BasicComponentsPage() {
  const sources = await Promise.all([
    read('src/shared/ui/Button.tsx'),
    read('src/shared/ui/Input.tsx'),
    read('src/shared/ui/Select.tsx'),
    read('src/shared/ui/Radio.tsx'),
    read('src/shared/ui/Toggle.tsx'),
    read('src/shared/ui/Modal.tsx'),
    read('src/shared/ui/Badge.tsx'),
    read('src/shared/ui/Card.tsx'),
    read('src/shared/ui/Tabs.tsx'),
    read('src/shared/ui/Form.tsx'),
  ]);

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
          <h1 className="text-2xl font-semibold mb-6">Basic Components Quick View</h1>

          <SourceUsage id="buttons" title="Button" source={sources[0]} preview={<ButtonsUsage />} usageCode={buttonsUsageCode} />
          <SourceUsage id="inputs" title="Input" source={sources[1]} preview={<InputsUsage />} usageCode={inputsUsageCode} />
          <SourceUsage id="select" title="Select (Listbox)" source={sources[2]} preview={<SelectUsage />} usageCode={selectUsageCode} />
          <SourceUsage id="radio" title="RadioGroup" source={sources[3]} preview={<RadioUsage />} usageCode={radioUsageCode} />
          <SourceUsage id="toggle" title="Toggle (Switch)" source={sources[4]} preview={<ToggleUsage />} usageCode={toggleUsageCode} />
          <SourceUsage id="modals" title="Modal (Dialog)" source={sources[5]} preview={<ModalUsage />} usageCode={modalUsageCode} />
          <SourceUsage id="badges" title="Badge" source={sources[6]} preview={<BadgeUsage />} usageCode={badgeUsageCode} />
          <SourceUsage id="cards" title="Card" source={sources[7]} preview={<CardUsage />} usageCode={cardUsageCode} />
          <SourceUsage id="tabs" title="Tabs" source={sources[8]} preview={<TabsUsage />} usageCode={tabsUsageCode} />
          <SourceUsage id="forms" title="Form Primitives" source={sources[9]} preview={<FormPrimitivesUsage />} usageCode={formUsageCode} />
        </div>
      </div>
    </div>
  );
}
