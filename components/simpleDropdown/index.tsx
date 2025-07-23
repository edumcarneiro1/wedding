import { FunctionComponent } from 'react'
import styles from './simpleDropdown.module.scss'

type Values = {
    value: number;
    name: string;
}

type Props = {
    values: Values[];
    defaultValue: number;
    onChange: (value: string) => void;
    label?: string;
    id: string;
}

const SimpleDropdown: FunctionComponent<Props> = ({values,defaultValue, onChange, label, id}) => {
  
    const options = values.map((opt, index) => <option key={index} value={opt.value}>{opt.name}</option>)
    return  (
        <div className={styles.dropdownContainer}>
            <label htmlFor={id}>{label}</label>
            <select 
                id={id}
                name={id}
                value={defaultValue} 
                onChange={(e)=> onChange(e.target.value)}
            >
                {options}
            </select>
        </div>
    );
};

export default SimpleDropdown;