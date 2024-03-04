import styles from './Pagination.module.css'

export default function Pagination({
    data,
    first,
    items,
    last,
    next,
    pages,
    prev,
    currentPage,
    setCurrentPage
}) {
    return (
        <ul className={styles["pagination"]}>
            <li className={styles["page-item"]}>
                {prev && <button className={styles["page-button"]} onClick={() => setCurrentPage(prev)}>Previous</button>}
            </li>
            <li
                className={styles["page-item"]} >
                {prev && <button className={styles["page-button"]} onClick={() => setCurrentPage(prev)}>{prev}</button>}
                <button className={styles["current-page"]}>{currentPage}</button>
                {next && <button className={styles["page-button"]} onClick={() => setCurrentPage(next)}>{next}</button>}
            </li>
            <li className={styles["page-item"]}>
                {next && <button className={styles["page-button"]} onClick={() => setCurrentPage(next)}>Next</button>}
            </li>
        </ul>
    )
}