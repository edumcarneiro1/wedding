import type { FunctionComponent } from 'react';
import styles from './hotelOptions.module.scss';
import { Guest, Type } from '@lib/types';
import SimpleDropdown from '@components/simpleDropdown';
import { useGuestContext } from '@/app/context/GuestContext';

type Props = {
    guest?: Guest;
};


const HotelOptions: FunctionComponent<Props> = ({guest}) => {
    const { setGuest } = useGuestContext();
    const value = guest?.days === 0 || guest?.days === 1 ? 1 : 2;

    const changeNights = (value: string) => {
        const guestUpdated = guest;
        if (guestUpdated ) {
            guestUpdated.days = parseInt(value);
            setGuest(guestUpdated)
        }
    };

    const values = [
        {value: 1, name: `1 Noite - ${guest?.type !== Type.Kid ? '50€ por adulto ' : '0€ por criança'}`},
        {value: 2, name: `2 Noites - ${guest?.type !== Type.Kid ? '100€ por adulto ' : '0€ por criança'}`}
    ]
    return  (
        <div className={styles.container}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <SimpleDropdown 
                label={'Numero de Noites'} 
                onChange={changeNights}
                values={values}
                defaultValue={value}
                id={`'dropdown-${guest?.id}'`} 
            />

        </div>
    )
};

export default HotelOptions;