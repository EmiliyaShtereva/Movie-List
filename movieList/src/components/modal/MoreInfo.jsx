import styles from './MoreInfo.module.css'

export default function MoreInfo({onClose, img, name, duration, rating, synopsis}) {
    return (
        <div className={styles["modal"]}>
            <div className={styles["backdrop"]} onClick={onClose}></div>
            <div className={styles["modal-content"]}>
                <span className={styles["close"]} onClick={onClose}>&times;</span>
                <div className={styles['movie-image']}>
                    <img src={img} alt="movie name" />
                </div>
                <div className={styles['movie-info']}>
                    <h1>{name}</h1>
                    <p><p className={styles['headers']}>Duration:</p> {duration}</p>
                    <p><p className={styles['headers']}>Rating:</p> {rating}</p>
                    <p><p className={styles['headers']}>Synopsis:</p> {synopsis}</p>
                </div>
            </div>
        </div>
    )
}