'use client';
import { useEffect } from 'react';
import { useGuestContext } from '@/app/context/GuestContext';
import translations from '@lib/locales/translations.yaml';
import { Guest } from "@lib/types";
import Button from "@components/button";
import { redirect } from 'next/navigation';
import { setGuestsToLocalStorage } from '@lib/utils';

type Props = {
  guests: Guest[];
  locale: 'pt' | 'en'
};

const StartClientWrapper = ({ guests, locale }: Props) => {
  const { setGuests, setLocale } = useGuestContext();
  
  useEffect(() => {
    setGuests(guests);
    setGuestsToLocalStorage(guests);
  }, [guests, setGuests]);

  useEffect(() => {
    setLocale(locale);
  }, [locale, setLocale]);

  const start = () => {
    redirect(`/${locale}/registration`);
  }

  return (
    <Button
      onClick={start}
      primary={true}
    >
      {translations[locale].startButton}
    </Button>
  );
};

export default StartClientWrapper;
