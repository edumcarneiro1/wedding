'use client';
import Image from "next/legacy/image";

import { useEffect } from "react";
import { useParams } from 'next/navigation';

import styles from "./page.module.scss";

import { useGuestContext } from "../../context/GuestContext";
import { getGuestsFromLocalStorage } from "@lib/utils";
import { HotelType, Type } from "@lib/types";

import translations from '@lib/locales/translations.yaml';

export default function Confirmation() {
    const {  guests, setGuests, setLocale, locale } = useGuestContext();
    const params = useParams<{ locale: string }>();

    useEffect(() => {
        const { locale: paramLocale } = params;
        if (paramLocale === 'pt' || paramLocale === 'en' && paramLocale !== locale) {
            setLocale(paramLocale);
        }
    }, [params, locale, setLocale]);

    useEffect(() => {
        if (!guests) {
        const guestsFromStorage = getGuestsFromLocalStorage();
        setGuests(guestsFromStorage);
        }
    }, [guests, setGuests])

    const hotelAvailability = guests && guests[0].hotel !== HotelType.NOT_AVAILABLE;
    const title = hotelAvailability ? translations[locale].confirmationHotelTitle : translations[locale].confirmationTitle

    let total = 0;
    guests?.forEach(guest => {
        if (
            guest.presence && 
            (guest.hotel === HotelType.YES || guest.hotel === HotelType.NOT_CONFIRMED) &&
            guest.type === Type.Adult && 
            guest.days
        ) {
            total += guest.days * 50
        }
    });
  
  return (
    <>
      <Image 
        className={styles.landingImage}
        src="/backgroundtest.png"
        alt="Casamento Rita e Eduardo"
        layout="fill"
        objectFit="cover"
        objectPosition='left'
      />
      <div className={styles.page}>
        <h1>{title}</h1>
        <h2>{translations[locale].date},  
          <a href="https://share.google/Sp0j5v2K5XXYI5L7k" target="_blank" rel="noopener noreferrer">
            Hotel Parque do Rio, Ofir
          </a>
        </h2>
        <div className={styles.body}>
          <h3>{translations[locale].confirmationSubTitle}</h3>
          <p>{translations[locale].confirmationGetinTouch}</p>
          {
            hotelAvailability && 
            <div className={styles.payment}>
                <p>{translations[locale].confirmationHotelDescription}:</p>
                <p>{translations[locale].confirmationTotalValue}: ${total}€</p>
                <p>{translations[locale].confirmationPaymentMethods}:</p>
                <p>Revolut: +351915816784</p>
                <p>MBWay: +351915816784</p>
                <p>{translations[locale].confirmationBankTransfer}: PT50 2131 123123 123123</p>
                <p>{translations[locale].confirmationPaymentNote}</p>
            </div>
          }
          <p>{translations[locale].confirmationNextSteps}</p>
        </div>
      </div>
    </>
  );
}
