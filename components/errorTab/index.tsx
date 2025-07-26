import type { FunctionComponent } from 'react'
import styles from './errorTab.module.scss'

type Props = {
    children: string;
}

const ErrorTab: FunctionComponent<Props> = ({children}) => {
    return  <div className={styles.error}>{children}</div>
};

export default ErrorTab;