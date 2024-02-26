import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <footer>
                <div className={styles['social-media']}>
                    <button><i className="fa-brands fa-facebook"></i></button>
                    <button><i className="fa-brands fa-instagram"></i></button>
                    <button><i className="fa-brands fa-x-twitter"></i></button>
                    <button><i className="fa-brands fa-discord"></i></button>
                </div>
                <div className={styles["other-pages"]}>
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Contacts</a>
                </div>
                <div className={styles["copyright"]}>
                    <p>Copyright &copy;2024 Site name</p>
                </div>
            </footer>
        </>
    )
}