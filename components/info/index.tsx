import { FunctionComponent } from 'react'
import styles from './info.module.scss'
import translations from '@lib/locales/translations.yaml';

type Locale = keyof typeof translations;

type Props = {
    locale: Locale;
}

const Text: FunctionComponent<Props> = ({locale}) => {
    return(
        <div className={styles.container}>
            <h3>{translations[locale].infoGreetings}</h3>
            <h3>{translations[locale].infoTitle}</h3>
            <p>{translations[locale].infoSteps}:</p>
        </div>
        
    );
};

export default Text;