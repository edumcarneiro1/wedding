'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Guest } from '@lib/types';

type Locale = 'pt' | 'en'

type GuestContextType = {
  guests: Guest[] | null;
  locale: Locale;
  setGuests: (guests: Guest[]) => void;
  setLocale: (locale: Locale) => void;
};

const GuestContext = createContext<GuestContextType | undefined>(undefined);

export const GuestProvider = ({ children }: { children: ReactNode }) => {
  const [guests, setGuests] = useState<Guest[] | null>(null);
  const [locale, setLocale] = useState<Locale>('pt');

  return (
    <GuestContext.Provider value={{ guests, setGuests, locale, setLocale }}>
      {children}
    </GuestContext.Provider>
  );
};

export const useGuestContext = () => {
  const context = useContext(GuestContext);
  if (!context) {
    throw new Error('useGuestContext must be used within a GuestProvider');
  }
  return context;
};
