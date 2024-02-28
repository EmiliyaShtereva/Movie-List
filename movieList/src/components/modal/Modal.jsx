import styles from './Modal.module.css'

export default function Modal() {
    return (
        <div className={styles["modal"]}>
            <div className={styles["modal-content"]}>
                <span className={styles["close"]}>&times;</span>
                <form className={styles["search-form"]}>
                    <input type="text" placeholder="Search friend..." name="search" />
                    <button type="submit">Invite friends</button>
                </form>
                <p>Invited Friends:</p>
                <div className={styles["friends"]}>
                    <p>First Last</p>
                    <p>First Last</p>
                    <p>First Last</p>
                    <p>First Last</p>
                    <p>First Last</p>
                </div>
            </div>
        </div>
    )
}