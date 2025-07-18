import type { FunctionComponent } from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';

type Props = {
    children: string;
    primary: boolean;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
};


const Button: FunctionComponent<Props> = ({primary, children, onClick}) => {
    const buttonStyle = primary ? classNames(styles.button, styles.primary) : classNames(styles.button, styles.secondary);
    
    return  (
        <button 
            onClick={onClick} 
            className={buttonStyle}
        >
            <span>{children}</span>
        </button>
    )
};

export default Button;