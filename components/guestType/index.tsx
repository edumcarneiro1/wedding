import type { FunctionComponent } from 'react';
import styles from './guestType.module.scss';


import { Guest, Type } from '@lib/types';
import SimpleDropdown from '@components/simpleDropdown';


type Props = {
    locale: string;
    guest: Guest;
    changeGuestType: (value: string) => void;
};


const GuestType: FunctionComponent<Props> = ({guest, changeGuestType }) => {

    const values = [
        {value: Type.Adult, name: 'Adult'},
        {value: Type.Kid, name: 'Kid'},
    ];
    return  (
        <div className={styles.container}>
            <SimpleDropdown 
                label={'Guest Type'} 
                onChange={changeGuestType}
                values={values}
                defaultValue={guest.type}
                id={`'dropdown-${guest?.id}'`} 
            />

        </div>
    )
};

export default GuestType;