import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <footer>
                <div className={styles["copyright"]}>
                    <p>This site is created for training purposes</p>
                </div>
            </footer>
        </>
    )
}