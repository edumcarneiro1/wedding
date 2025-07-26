'use client';
import { JSX, useEffect, useState, useRef } from "react";
import { useParams } from 'next/navigation';

import styles from "./page.module.scss";
import { useGuestContext } from "../../context/GuestContext";
import { getGuestsFromLocalStorage } from "@lib/utils";

import GuestCard from "@components/guest";
import Button from "@components/button";
import ErrorTab from "@components/errorTab";
import { PostGuests } from "@lib/api";

import translations from '@lib/locales/translations.yaml';

export default function Registration() {
  const {  guests, setGuests, setLocale, locale, addGuestToFamily } = useGuestContext();
  const params = useParams<{ locale: string }>();
  const [added, setAdded] = useState(0);
  const [error, setError] = useState("");

  const errorRef = useRef<HTMLDivElement>(null);
  const guestRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [lastAddedGuestId, setLastAddedGuestId] = useState<number | null>(null);


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

  useEffect(() => {
    if (error && errorRef.current) {
      errorRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [error]);

  useEffect(() => {
    if (added === 5) {
      setError(translations[locale].guestLimt);
    }
  }, [added, locale]);

  useEffect(() => {
    if (lastAddedGuestId && guestRefs.current[lastAddedGuestId]) {
      guestRefs.current[lastAddedGuestId]?.scrollIntoView({ behavior: "smooth", block: "center" });
      setLastAddedGuestId(null);
    }
  }, [lastAddedGuestId, guests]);
  

  const guestsElements = (): JSX.Element[] => {
    const elements: JSX.Element[] = [];
    guests?.forEach((guest, index) => {
      const id = guest.id ? guest.id : 0; 
      elements.push(
        <GuestCard 
          ref={el => { guestRefs.current[id] = el; }}
          guest={guest}
          key={index} 
        />
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

  const submit = async (event: React.FormEvent<HTMLFormElement>) : Promise<void> => {
    event.preventDefault();
    const response = await PostGuests(guests || []);

    if (response.success) {

    } else {
      setError(translations[locale].genericError);
    }
  }

  const focus = (): void => {
    if(error !== "") {
      setError("");
    }
  }

  return (
    <div className={styles.page}>
      {
        error !== "" && 
        <ErrorTab ref={errorRef}>{error}</ErrorTab>
      }
      <form 
        className={styles.form}
        onSubmit={submit}
        onFocus={focus}
      >
        {guestsElements()}
        <div className={styles.actions}>
          {
            added < 5 &&
            <Button
              onClick={addGuest}
              primary={false}
            >
              Add new guest
            </Button>
          }
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
