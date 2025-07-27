'use client'
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { Guest } from "@lib/types";
import { useGuestContext } from "@/app/context/GuestContext";
import { setGuestsToLocalStorage } from '@lib/utils';

type Props = {
  guests: Guest[];
  locale: 'pt' | 'en'
};

const SetGuestsAndRedirect = ({ guests, locale }: Props) => {
    const { setGuests, setLocale } = useGuestContext();

    useEffect(() => {
        setGuests(guests);
        setGuestsToLocalStorage(guests);
    }, [guests, setGuests]);

    useEffect(() => {
        setLocale(locale);
    }, [locale, setLocale]);
    
    useEffect(() => {
        redirect(`/${locale}/confirmation`);
    }, [guests, locale]);

    return <div>Redirecting...</div>;
};

export default SetGuestsAndRedirect;