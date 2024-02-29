import styles from './Modal.module.css'

export default function Modal({onClose, invitedFriends}) {
    return (
        <div className={styles["modal"]}>
            <div className={styles["backdrop"]} onClick={onClose}></div>
            <div className={styles["modal-content"]}>
                <span className={styles["close"]} onClick={onClose}>&times;</span>
                <form className={styles["search-form"]}>
                    <input type="text" placeholder="Search friend..." name="search" />
                    <button type="submit">Invite friends</button>
                </form>
                <p>Invited Friends:</p>
                <div className={styles["friends"]}>
                    {invitedFriends.map(f => (
                        <p>{f}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}