import type { FunctionComponent } from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';

type Props = {
    children: string;
    primary: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    type?: "button" | "submit" | "reset" | undefined;
};


const Button: FunctionComponent<Props> = ({primary, children, onClick, type}) => {
    const buttonStyle = primary ? classNames(styles.button, styles.primary) : classNames(styles.button, styles.secondary);
    
    return  (
        <button 
            onClick={onClick} 
            className={buttonStyle}
            type={type}
        >
            <span>{children}</span>
        </button>
    )
};

export default Button;