import { FunctionComponent } from 'react'
import styles from './text.module.scss'
import classNames from 'classnames'

type Props = {
    placeHolder?: string;
    id: string;
    onChange: (name: string) => void;
    value?: string;
    className?: string;
    label?: string;
}

const Text: FunctionComponent<Props> = ({id, placeHolder, value, onChange, label, className}) => {
    return(
        <div className={styles.container}>
            <label htmlFor={id}>{label}</label>
            <textarea
                id={id}
                name={id}
                placeholder={placeHolder} 
                className={classNames(styles.text, className)} 
                onChange={(e) => onChange(e.target.value)}
                value={value}
            />
        </div>
        
    );
};

export default Text;