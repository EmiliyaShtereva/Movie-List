import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <footer>
                <div className={styles["other-pages"]}>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contacts</a>
                </div>
                <div className={styles["copyright"]}>
                    <p>This site is created for training purposes</p>
                </div>
            </footer>
        </>
    )
}