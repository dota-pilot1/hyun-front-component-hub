import '../app/globals.css';
import React from 'react';
import HeaderGate from './HeaderGate';

export const metadata = { title: 'Admin', description: 'Admin Panel' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.min.css" />
      </head>
      <body>
        <HeaderGate />
        <main>{children}</main>
        <script defer src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-core.min.js"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                if (!window.Prism || !Prism.plugins || !Prism.plugins.autoloader) return;
                Prism.plugins.autoloader.languages_path = 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/';
              })();
            `
          }}
        />
      </body>
    </html>
  );
}
