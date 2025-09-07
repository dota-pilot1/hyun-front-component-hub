"use client";
import React, { useState } from 'react';
import { componentTree, ComponentTreeItem } from '@/shared/data/componentTree';
import { useActiveSection } from '@/shared/hooks/useActiveSection';

interface TreeNodeProps { item: ComponentTreeItem; depth?: number; activeId: string | null; }

const TreeNode: React.FC<TreeNodeProps> = ({ item, depth = 0, activeId }) => {
  const [open, setOpen] = useState(true);
  const hasChildren = !!item.children?.length;
  const isActive = item.href && activeId && item.href === `#${activeId}`;
  return (
    <div className="select-none">
      <div
        className={[
          'flex items-center py-1 cursor-pointer rounded px-2 text-sm transition-colors',
          isActive ? 'bg-primary text-white' : 'hover:bg-muted'
        ].join(' ')}
        onClick={() => {
          if (item.href) {
            const target = document.querySelector(item.href);
            if (target) {
              window.history.replaceState(null, '', item.href);
              (target as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          } else if (hasChildren) {
            setOpen(o => !o);
          }
        }}
      >
        {hasChildren && (
          <span className={`mr-1 transition-transform ${open ? 'rotate-90' : ''}`}>▶</span>
        )}
        <span className={hasChildren ? 'font-medium' : ''}>{item.label}</span>
      </div>
      {hasChildren && open && (
        <div className="ml-3 border-l border-border pl-2">
          {item.children!.map(child => (
            <TreeNode key={child.id} item={child} depth={depth + 1} activeId={activeId} />
          ))}
        </div>
      )}
    </div>
  );
};

export const TreeNav: React.FC = () => {
  const leafIds: string[] = [];
  const collect = (items: ComponentTreeItem[]) => {
    items.forEach(i => {
      if (i.href) leafIds.push(i.href.replace('#',''));
      if (i.children) collect(i.children);
    });
  };
  collect(componentTree);
  const activeId = useActiveSection(leafIds);
  return (
    <div className="text-sm">
      {componentTree.map(item => (
        <TreeNode key={item.id} item={item} activeId={activeId} />
      ))}
    </div>
  );
};
