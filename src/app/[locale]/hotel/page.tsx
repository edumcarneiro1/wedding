import { redirect } from 'next/navigation';
import styles from "./page.module.scss";
import translations from '@lib/locales/translations.yaml';
import Info from '@components/info';
import Day from '@components/day';
import Wedding from '@components/wedding';
import Gift from '@components/gift';
import Photos from '@components/photos';

export default async function HotelPage({ params }: { params: Promise<{ locale?: string }> }) {
    const { locale } = await params;
    
    if (!locale || (locale !== 'pt' && locale !== 'en')) {
        redirect('/pt/hotel');
    }


    const warmUp = () => {
        return (
        <div>
            <p>{translations[locale].warmUpText1}</p>
            <p>{translations[locale].warmUpText2} <a href="https://maps.app.goo.gl/YnHnGrTa92xRVust9" target="_blank">
                    (Link)
                    </a></p>
            <p>{translations[locale].warmUpText4}</p>
        </div>
        );
    }

    const hangover = () => {
        return (
        <div>
            <p>{translations[locale].hangoverText1}</p>
            <p>{translations[locale].hangoverText2}</p>
        </div>
        );
    }

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
                <Info locale={locale}/>
                <Day 
                    locale={locale} 
                    date={'10/10/2025'} 
                    hour={'17:00'} 
                    body={warmUp()} 
                    title={translations[locale].warmUpTitle}
                />
                <Day 
                    locale={locale} 
                    date={'11/10/2025'} 
                    hour={'16:30*'} 
                    body={<Wedding locale={locale} hotel={true}/>} 
                    title={translations[locale].weddingTitle}
                />
                <Day 
                    locale={locale} 
                    date={'12/10/2025'} 
                    hour={'12:00'} 
                    body={hangover()} 
                    title={translations[locale].hangoverTitle}
                />
                <Gift locale={locale}/>
                <Photos locale={locale}/>
            </div>
        </>
    );
}