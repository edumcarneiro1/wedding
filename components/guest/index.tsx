import { FunctionComponent } from 'react'
import styles from './guest.module.scss'
import { Guest } from '@lib/types';
import translations from '@lib/locales/translations.yaml';
import classNames from 'classnames';

import Input from "@components/input";
import Text from "@components/text";
import Hotel from "@components/hotel";
import HotelOptions from '@components/hotel/hotelOptions';

import { HotelType } from '@lib/types';

import { useGuestContext } from "../../src/app/context/GuestContext"
import Presence from '@components/presence';
import GuestType from '@components/guestType';


type Props = {
    guest?: Guest;
};



const GuestCard: FunctionComponent<Props> = ({guest}) => {
    const { setGuest, locale, deleteGuestfromFamily } = useGuestContext();
    
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

    const changeHotel = (hotel: boolean) => {
        const guestUpdated = guest;
        if (guestUpdated ) {
            guestUpdated.hotel = hotel ? HotelType.YES : HotelType.NO;
            setGuest(guestUpdated)
        }
    };

    const changePresence = (presence: boolean) => {
        const guestUpdated = guest;
        if (guestUpdated ) {
            guestUpdated.presence = presence;
            setGuest(guestUpdated)
        }
    };

    const changeType = (type: string) => {
        const guestUpdated = guest;
        if (guestUpdated ) {
            guestUpdated.type = parseInt(type);
            setGuest(guestUpdated)
        }
    };

    const deleteGuest = () => {
        if(guest) deleteGuestfromFamily(guest);
    };

    const availableToHotel : boolean = guest?.hotel !== HotelType.NOT_AVAILABLE;
    const hotelValue : boolean = guest?.hotel === HotelType.YES || guest?.hotel === HotelType.NOT_CONFIRMED ? true : false;
    const presence_confirmed = !guest || guest?.presence === null ? true : guest?.presence;
    const guestAdded = guest?.id && guest.id > 900;
    
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
            {
                guest && guest.id === 0 && 
                <div className={styles.formField}>
                    <GuestType 
                        guest={guest}
                        locale={locale}
                        changeGuestType={changeType}
                    />
                </div>
            }

            <div className={styles.formField}>
                    <Presence 
                        id={`'presence-${guest?.id}'`} 
                        checked={presence_confirmed} 
                        onChange={changePresence}
                        name={`'presence-${guest?.id}'`} 
                        locale={locale}
                    />
                </div>
            {
                presence_confirmed && 
                <div className={styles.formField}>
                    <Text 
                        id={`'restrictions-text-${guest?.id}'`}
                        onChange={changeRestrictions}
                        value={guest?.restrictions}
                        placeHolder={translations[locale].restrictionsPlaceholder}
                        label={translations[locale].restrictionsTitle}
                    />
                </div>
            }
            {
                presence_confirmed && availableToHotel && 
                <div className={styles.formField}>
                    <Hotel 
                        id={`'toggle-${guest?.id}'`} 
                        checked={hotelValue} 
                        onChange={changeHotel}
                        name={`'toggle-${guest?.id}'`} 
                        locale={locale}
                    />
                </div>
            }
            {
               presence_confirmed && hotelValue && 
               <div className={styles.formField}>
                 <HotelOptions guest={guest} />
               </div>
            }
            {
                guestAdded &&
                <div className={classNames(styles.formField, styles.link)}>
                 <a className={styles.delete} href="#" onClick={deleteGuest}>Delete Guest</a>
               </div>
            }
        </div>
    );
};

export default GuestCard;