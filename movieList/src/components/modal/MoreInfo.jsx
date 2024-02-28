import styles from './MoreInfo.module.css'

export default function MoreInfo() {
    return (
        <div className={styles["modal"]}>
            <div className={styles["modal-content"]}>
                <span className={styles["close"]}>&times;</span>
                <div className={styles['movie-image']}>
                    <img src="https://resizing.flixster.com/ZJ5aqScAhzuxf3-3QdnKS3h0TC4=/206x305/v2/https://resizing.flixster.com/Bx2OFTZyXMQCB30_E6EmiA52wZo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZiMzI0ODJhLTZmNzYtNDNkZC04MjdhLTBlODVhOTgzNzQ2Zi5qcGc=" alt="movie name" />
                </div>
                <div className={styles['movie-info']}>
                    <h1>Movie Name</h1>
                    <p><p className={styles['headers']}>Duration:</p> 1h 25min</p>
                    <p><p className={styles['headers']}>Rating:</p> 3.8/10</p>
                    <p><p className={styles['headers']}>Synopsis:</p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga assumenda, neque mollitia pariatur facilis libero unde suscipit minus est totam, ducimus accusantium officiis ullam nihil, optio maxime impedit quo ipsam.</p>
                </div>
            </div>
        </div>
    )
}