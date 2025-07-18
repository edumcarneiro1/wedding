import type { Metadata, Viewport } from "next";
import Image from "next/legacy/image";

import "./styles/globals.scss";

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
        <Image 
            className={'.landingImage'}
            src="/background.png"
            alt="Kuirius, pelo amor à comida"
            layout="fill"
            objectFit="cover"
            objectPosition='left'

          />
        <GuestProvider>
          {children}
        </GuestProvider>
      </body>
    </html>
  );
}
