import { FunctionComponent } from 'react'
import styles from './photos.module.scss'
import translations from '@lib/locales/translations.yaml';

type Locale = keyof typeof translations;

type Props = {
    locale: Locale;
}

const Photos: FunctionComponent<Props> = ({locale}) => {
    return(
        <div className={styles.container}>
            <h2>{translations[locale].photosTitle}</h2>
            <p>{translations[locale].photosText1}</p>
            <p>{translations[locale].photosText2}</p>
            <p>{translations[locale].photosText3}</p>
            <h3 className={styles.link}>
                <a href="https://photos.app.goo.gl/M6VY5MVkXodRPTRJ7" target="_blank">
                    Link
                </a>
            </h3>
            <p className={styles.or}>{translations[locale].or}</p>
            <div className={styles.qrCode} >
                <img
                    src="/frame.png"
                    alt="GooglePhotos QR Code"
                />
            </div>
        </div>
        
    );
};

export default Photos;