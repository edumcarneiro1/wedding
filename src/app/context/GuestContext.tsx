'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Guest } from '@lib/types';

type Locale = 'pt' | 'en'

type GuestContextType = {
  guests: Guest[] | null;
  locale: Locale;
  setGuests: (guests: Guest[]) => void;
  setGuest: (guest: Guest) => void;
  setLocale: (locale: Locale) => void;
  addGuestToFamily: (guest: Guest) => void;
  deleteGuestfromFamily: (guest: Guest) => void;
};

const GuestContext = createContext<GuestContextType | undefined>(undefined);

export const GuestProvider = ({ children }: { children: ReactNode }) => {
  const [guests, setGuests] = useState<Guest[] | null>(null);
  const [locale, setLocale] = useState<Locale>('pt');

  const setGuest = (guest: Guest) => {
    setGuests(prevGuests => {
      if (!prevGuests) return [guest];
      const existingIndex = prevGuests.findIndex(g => g.id === guest.id);
      if (existingIndex !== -1) {
        const updated = [...prevGuests];
        updated[existingIndex] = guest;
        return updated;
      } else {
        return [...prevGuests, guest];
      }
    });
  };

  const addGuestToFamily = (guest: Guest) => {
    setGuests(prevGuests => {
      if (!prevGuests) return [guest];
      return [...prevGuests, guest];
    })
  };

  const deleteGuestfromFamily = (guest: Guest) => {
    setGuests(prevGuests => {
      if (!prevGuests) return null;
      return prevGuests.filter(g => g.id !== guest.id);
    });
  };

  return (
    <GuestContext.Provider value={{ guests, setGuests, setGuest, locale, setLocale, addGuestToFamily, deleteGuestfromFamily }}>
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
