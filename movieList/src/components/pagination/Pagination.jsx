import styles from './Pagination.module.css'

export default function Pagination() {

    return (
        <ul className={styles['pagination']}>
            <li className={styles["page-item"]}>
                <button className={styles["page-button"]}
                >Previous</button>
            </li>
            <li
                className={styles[`page-item 
                    `]} >
                <button
                    className={styles["page-button"]}>1</button>
            </li>
            <li className={styles["page-item"]}>
                <button className={styles["page-button"]}
                >Next</button>
            </li>
        </ul>
    )
}