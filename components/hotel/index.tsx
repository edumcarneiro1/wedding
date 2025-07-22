import { FunctionComponent, KeyboardEvent } from 'react'
import styles from "./toggle.module.scss";


type Props = {
    id: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    name: string;
};

const Hotel: FunctionComponent<Props> = ({ id, name, checked, onChange }) => {

    const handleKeyPress = (e: KeyboardEvent<HTMLLabelElement>) => {
        if (e.keyCode !== 32) return;
    
        e.preventDefault();
        onChange(!checked)
    };
    
    return(
        <div className={styles.container}>
            <div className={styles.labels}>
                <label>Hotel</label>
                <p>Activa o switch para reservar o teu quarto no hotel</p>
            </div>
            <div className={styles.toggleContainer}>
                <div className={styles["toggle-switch"]}>
                    <input
                        type="checkbox"
                        name={name}
                        className={styles["toggle-switch-checkbox"]}
                        id={id}
                        checked={checked}
                        onChange={e => onChange(e.target.checked)}
                        />
                        {id ? (
                        <label className={styles["toggle-switch-label"]}
                                htmlFor={id}
                                tabIndex={ 1 }
                                onKeyDown={ (e) => { handleKeyPress(e) }}>
                            <span
                            className={styles["toggle-switch-inner"]}
                            tabIndex={-1}
                            />
                            <span
                            className={styles["toggle-switch-switch"]}
                            tabIndex={-1}
                            />
                        </label>
                        ) : null}
                    </div>
            </div>
        </div>
        
    );
};

export default Hotel;