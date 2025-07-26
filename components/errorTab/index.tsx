import { forwardRef } from 'react'
import styles from './errorTab.module.scss'

type Props = {
    children: string;
}

const ErrorTab = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
    return <div ref={ref} className={styles.error}>{children}</div>
});

ErrorTab.displayName = "ErrorTab";

export default ErrorTab;
