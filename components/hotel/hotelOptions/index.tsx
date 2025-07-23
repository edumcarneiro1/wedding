import type { FunctionComponent } from 'react';
import styles from './hotelOptions.module.scss';
import { Guest, Type } from '@lib/types';
import SimpleDropdown from '@components/simpleDropdown';
import { useGuestContext } from '@/app/context/GuestContext';
import translations from '@lib/locales/translations.yaml';

type Props = {
    guest?: Guest;
};


const HotelOptions: FunctionComponent<Props> = ({guest}) => {
    const { setGuest, locale } = useGuestContext();
    const value = guest?.days === 0 || guest?.days === 1 ? 1 : 2;

    const changeNights = (value: string) => {
        const guestUpdated = guest;
        if (guestUpdated ) {
            guestUpdated.days = parseInt(value);
            setGuest(guestUpdated)
        }
    };

    const values = [
        {value: 1, name: guest?.type !== Type.Kid ? translations[locale].hotelOneNightAdult :  translations[locale].hotelOneNightKids},
        {value: 3, name: guest?.type !== Type.Kid ? translations[locale].hotelTwoNightsAdult :  translations[locale].hotelTwoNightsKids},
    ]
    return  (
        <div className={styles.container}>
            <p>{translations[locale].hotelDescription}</p>
            <SimpleDropdown 
                label={translations[locale].hotelNightsTitle} 
                onChange={changeNights}
                values={values}
                defaultValue={value}
                id={`'dropdown-${guest?.id}'`} 
            />

        </div>
    )
};

export default HotelOptions;