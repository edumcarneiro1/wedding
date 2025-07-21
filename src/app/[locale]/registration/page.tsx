'use client';
import styles from "./page.module.scss";
import { useGuestContext } from "../../context/GuestContext";


import { JSX, useEffect } from "react";
import GuestCard from "@components/guest";
import { getGuestsFromLocalStorage } from "@lib/utils";
import { useParams } from 'next/navigation'

export default function Registration() {
  const {  guests, setGuests, setLocale, locale } = useGuestContext();
  const params = useParams<{ locale: string }>();


  useEffect(() => {
    if (!guests) {
      const guestsFromStorage = getGuestsFromLocalStorage();
      setGuests(guestsFromStorage);
    }
  }, [guests, setGuests])

  useEffect(() => {
    const { locale: paramLocale } = params;
    if (paramLocale === 'pt' || paramLocale === 'en' && paramLocale !== locale) {
      setLocale(paramLocale);
    }
  }, [params, locale, setLocale]);
  

  const guestsElements = (): JSX.Element[] => {
    const elements: JSX.Element[] = [];
    guests?.forEach((guest, index) => {
      elements.push(
        <GuestCard guest={guest} key={index} />
      )
    });
    return elements;
  };

  return (
    <div className={styles.page}>
      {guestsElements()}
    </div>
  );
}
