import { FunctionComponent } from 'react'
import styles from './input.module.scss'
import classNames from 'classnames'

type Props = {
    placeHolder?: string;
    onChange: (name: string) => void;
    value: string;
    id: string;
    className?: string;
    label?: string;
}

const Input: FunctionComponent<Props> = ({id,label, placeHolder, value, onChange, className}) => {
    return(
        <div className={styles.container}>
            <label htmlFor={id}>{label}</label>
            <input 
                id={id}
                name={id}
                placeholder={placeHolder} 
                className={classNames(styles.input, className)}  
                onChange={(e) => onChange(e.target.value)}
                value={value}
            />
        </div>
    );
};

export default Input;