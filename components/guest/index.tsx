import { FunctionComponent } from 'react'
import styles from './guest.module.scss'
import { Guest } from '@lib/types';
import translations from '@lib/locales/translations.yaml';

import Input from "@components/input";
import Text from "@components/text";

import { useGuestContext } from "../../src/app/context/GuestContext"

type Props = {
    guest?: Guest;
};



const GuestCard: FunctionComponent<Props> = ({guest}) => {
    const { setGuest, locale } = useGuestContext();
    
    const changeName = (name: string) => {
        const guestUpdated = guest;
        if (guestUpdated ) {
            guestUpdated.name = name;
            setGuest(guestUpdated)
        }
    };

    const changeSurname = (surname: string) => {
        const guestUpdated = guest;
        if (guestUpdated ) {
            guestUpdated.surname = surname;
            setGuest(guestUpdated)
        }
    };

    const changeRestrictions = (restrictions: string) => {
        const guestUpdated = guest;
        if (guestUpdated ) {
            guestUpdated.restrictions = restrictions;
            setGuest(guestUpdated)
        }
    };

    return(
        <div className={styles.guest}>
            <div className={styles.formField}>
                <Input
                    id={`name-input${guest?.id}`}
                    onChange={changeName}
                    value={`${guest?.name}`}
                    label={`${translations[locale].name}*`}
                />
                 <Input
                    id={`surname-input${guest?.id}`}
                    onChange={changeSurname}
                    value={`${guest?.surname}`}
                    label={`${translations[locale].surname}*`}
                />
            </div>
            <div className={styles.formField}>
                <Text 
                    id={`'restrictions-text-${guest?.id}'`}
                    onChange={changeRestrictions}
                    value={guest?.restrictions}
                    placeHolder={translations[locale].restrictionsPlaceholder}
                    label={translations[locale].restrictionsTitle}
                />
            </div>
        </div>
    );
};

export default GuestCard;