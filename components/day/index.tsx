import { FunctionComponent, ReactNode } from 'react'
import styles from './day.module.scss'
import translations from '@lib/locales/translations.yaml';

type Locale = keyof typeof translations;

type Props = {
    locale: Locale;
    title?: string;
    date: string;
    hour: string;
    body: ReactNode;
}

const Text: FunctionComponent<Props> = ({locale, title, date, hour, body}) => {
    return(
        <div className={styles.container}>
            {title && <h2>{title}</h2>}
            <h3><span>{translations[locale].dateText}</span>: {date}</h3>
            <h3><span>{translations[locale].hourText}</span>: {hour}</h3>
            {body}
        </div>
        
    );
};

export default Text;