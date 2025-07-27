import styles from "./page.module.scss";
import { getGuests } from '@lib/api';
import { Guest, HotelType } from '@lib/types';
import { JSX, } from "react";
import { redirect } from 'next/navigation';
import Image from "next/legacy/image";

import translations from '@lib/locales/translations.yaml';

import { ErrorModule } from "@components/error/error";
import StartClientWrapper from "middlewares/StartClientWrapper";
import SetGuestsAndRedirect from "middlewares/SetClients";


export const dynamic = 'force-dynamic';

type Params = Promise<{locale: string, token: string}>

export default async function Home({ params }: { params: Params }) {
  const { token, locale } =  await params;

  if (!token) {
    redirect('/pt');
  }

  if (locale !== 'pt' && locale !== 'en') {
    redirect(`/pt/${token}`);
  }

  const guests: Guest[]  = await getGuests(token);

  if (!guests || guests.length === 0) {
    return <ErrorModule locale={locale}/>;
  } else if (guests.filter(guest => !guest.confirmed).length === 0) {
    return <SetGuestsAndRedirect guests={guests} locale={locale} />
  }


  const salut = () => {
    const elements: JSX.Element[] = [];
    
    guests.forEach((guest, index) => {
      const isLast = index === guests.length - 1;
      const isFirst = index === 0;
      if (!isFirst) {
        elements.push(
          <span key={`separator-${index}`}>
            {isLast ? ' e ' : ', '}
          </span>
        );
      }
  
      elements.push(<span key={`guest-${index}`}>{guest.name}</span>);
      
    })
    return elements;
  }

  const availableToHotel : boolean = guests[0].hotel !== HotelType.NOT_AVAILABLE;


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
          <h1>{translations[locale].title}</h1>
          <h2>{translations[locale].date},  
            <a href="https://share.google/Sp0j5v2K5XXYI5L7k" target="_blank">
              Hotel Parque do Rio, Ofir
            </a>
          </h2>
          <div className={styles.body}>
            <h3>{translations[locale].greetings} {salut()} </h3>
            <p>{translations[locale].homepageText}</p>
            <p>{translations[locale].homepageSubText}</p>
            { availableToHotel &&  
              <>
                <p>{translations[locale].homepageHotel}</p>
                <p>{translations[locale].homepageSubHotell}</p>
              </> 
            }
            <p>{translations[locale].homepageConfirmation}:</p>
            
          </div>
          <div className={styles.actions}>
            <StartClientWrapper guests={guests} locale={locale}/>
          </div>
          
      </div>
    </>
  );
}
