'use-client'
import Image from "next/legacy/image";
import styles from "./error.module.scss";
import translations from '@lib/locales/translations.yaml';

import { headers } from 'next/headers';
import MobileDetect from 'mobile-detect';

type Props = {
  locale: 'pt' | 'en';
};

export const ErrorModule  =  async ({locale}: Props) => {
  const requestHeaders = headers();
  const userAgent = (await requestHeaders).get('user-agent') || '';
  const md = new MobileDetect(userAgent);
  const isMobile = !!md.mobile();

  const backgroundImage = isMobile
    ? "/backgroundmWeb.png"
    : "/backgroundWeb.png";
  
    return (
      <>
        <Image 
            className={styles.landingImage}
            src={backgroundImage}
            alt="Kuirius, pelo amor à comida"
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
              <h3>{translations[locale].greetings},</h3>
              <p>{translations[locale].errorText}</p>
              <p>{translations[locale].errorSubText}</p>
            </div>
          </div> 
      </>
        
    );
};