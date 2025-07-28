'use-client'
import styles from "./error.module.scss";
import translations from '@lib/locales/translations.yaml';

type Props = {
  locale: 'pt' | 'en';
};

export const ErrorModule  =  async ({locale}: Props) => {
    return (
      <>
        <div className={styles.backgroundImage}></div>
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