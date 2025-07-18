'use client';
import styles from "./page.module.scss";
import { useGuestContext } from "../../context/GuestContext";

export default function Registration() {
  const {  locale } = useGuestContext();
  
  return (
    <div className={styles.page}>
        {locale}
    </div>
  );
}
