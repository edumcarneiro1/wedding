import { FunctionComponent } from 'react'
import styles from './wedding.module.scss'
import translations from '@lib/locales/translations.yaml';

type Locale = keyof typeof translations;

type Props = {
    locale: Locale;
    hotel: boolean;
}

const Wedding: FunctionComponent<Props> = ({locale, hotel}) => {
    return(
        <div className={styles.container}>
            {hotel && <p>* {translations[locale].weddingCheckIn}</p>}
            <h3><span>{translations[locale].weddingLocal}</span>: Parque do Rio Ofir Hotel</h3>
            <h3><span>{translations[locale].weddingAddress}</span>: Caminho Padre Manuel de Sá Pereira Fão, 4741-908 Esposende</h3>
            <h3>
                <span>Google Maps</span>: 
                <a href="https://maps.app.goo.gl/UvvWHwKfzuSXZ5Kf7" target="_blank">
                    Link
                </a>
            </h3>
            <h3 className={styles.parking}><span>{translations[locale].weddingParking}</span></h3>
            <p>{translations[locale].weedingParkingText}</p>
            <div className={styles.parkingMap}>
                <img
                    src="/parking.png"
                    alt="Hotel Parking Map"
                />
            </div>
            <p>{translations[locale].weedingParkingHelperText}</p>
            <h3><span>{translations[locale].weddingAddress}</span>: R. dos Barcos C 4740, 4740-331 Fão</h3>
            <h3>
                <span>Google Maps</span>: 
                <a href=" https://maps.app.goo.gl/D8zCMeo3uxJJhmLY7" target="_blank">
                    Link
                </a>
            </h3>
        </div>
        
    );
};

export default Wedding;