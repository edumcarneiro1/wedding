import type { Metadata, Viewport } from "next";
import "./styles/globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next"

import { GuestProvider } from './context/GuestContext';

export const metadata: Metadata = {
  title: "Casamento Rita & Eduardo",
  description: "Casamento Rita & Eduardo",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        <div className={'layout_container'}>
          <SpeedInsights/>
          <GuestProvider>
            {children}
          </GuestProvider>
        </div>
      </body>
    </html>
  );
}
