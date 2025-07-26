'use client';
import styles from "./page.module.scss";
import { useGuestContext } from "../../context/GuestContext";


import { JSX, useEffect, useState } from "react";
import GuestCard from "@components/guest";
import { getGuestsFromLocalStorage } from "@lib/utils";
import { useParams } from 'next/navigation'
import Button from "@components/button";

export default function Registration() {
  const {  guests, setGuests, setLocale, locale, addGuestToFamily } = useGuestContext();
  const params = useParams<{ locale: string }>();
  const [added, setAdded] = useState(0);

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

  const addGuest = () : void => {
    if (guests) {
      const newGuest = {
        id: guests.length + 1 + 900 ,
        name: '',
        surname: '',
        type: 0,
        presence: false,
        confirmed: false,
        hotel: guests[0].hotel,
        status: 1,
        restrictions: '',
        days: 0, 
        family_id: guests[0].hotel
      };
      addGuestToFamily(newGuest);
      setAdded(added + 1);
    } 
  }

  const submit = () : void => {
    console.log('guests', guests);
  }

  //if guests added > 99 throw an error

  return (
    <div className={styles.page}>
      <form action={submit}>
        {guestsElements()}
        <div className={styles.actions}>
          <Button
            onClick={addGuest}
            primary={false}
          >
            Add new guest
          </Button>
          <Button
              primary={true}
              type={'submit'}
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
