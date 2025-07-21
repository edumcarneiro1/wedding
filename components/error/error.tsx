'use-client'
import styles from "./error.module.scss";
import translations from '@lib/locales/translations.yaml';
import Image from "next/legacy/image";

type Props = {
  locale: 'pt' | 'en';
};

export const ErrorModule  = ({locale}: Props) => {
    return (
      <>
        <Image 
            className={styles.landingImage}
            src="/backgroundtest.png"
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