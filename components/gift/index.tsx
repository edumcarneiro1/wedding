import { FunctionComponent } from 'react'
import styles from './gift.module.scss'
import translations from '@lib/locales/translations.yaml';

type Locale = keyof typeof translations;

type Props = {
    locale: Locale;
}

const Gift: FunctionComponent<Props> = ({locale}) => {
    return(
        <div className={styles.container}>
            <h2>{translations[locale].giftTitle}</h2>
            <p>{translations[locale].giftText1}</p>
            <h3 className={styles.title}>MBWAY</h3>
            <h3>Rita - 913955261</h3>
            <h3>Eduardo - 915816784</h3>
            <h3 className={styles.title}>{translations[locale].giftBankTransferTitle}</h3>
            <h3><span>IBAN: </span>: PT50007900009129932510102</h3>
            <h3><span>{translations[locale].giftBankTransferOwner}</span>: RITA ERMIDA DA FONSECA</h3>
            <h3><span>SWIFT:</span>: BPNPPTPL</h3>
            <h3 className={styles.title}>Revolut</h3>
            <h3 className={styles.link}>
                <a href="https://revolut.me/ritaefonseca" target="_blank">
                    Link
                </a>
            </h3>
            <p className={styles.or}>{translations[locale].or}</p>
            <div className={styles.qrCode} >
                <img
                    src="/revolut.png"
                    alt="Revolut QR Code"
                />
            </div>
        </div>
        
    );
};

export default Gift;