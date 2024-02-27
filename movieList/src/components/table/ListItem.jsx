import Modal from '../modal/Modal'
import styles from './ListItem.module.css'

export default function ListItem() {
    return (
        <>
            <tr>
                <td className={styles['movie-image']}>
                    <img src="https://resizing.flixster.com/ZJ5aqScAhzuxf3-3QdnKS3h0TC4=/206x305/v2/https://resizing.flixster.com/Bx2OFTZyXMQCB30_E6EmiA52wZo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZiMzI0ODJhLTZmNzYtNDNkZC04MjdhLTBlODVhOTgzNzQ2Zi5qcGc=" alt="movie name" />
                </td>
                <td className={styles['movie']}>
                    <p className={styles['movie-name']}>Movie Name</p>
                </td>
                <td className={styles['invited-friends']}>
                    <p>First Last, First Last, First last, First Last, First Last, First Last, First last, First Last </p>
                </td>
                <td className={styles['buttons']}>
                    <button>Invite friends</button>
                    <button><i className="fa-solid fa-info"></i></button>
                </td>
            </tr>

            {/* <Modal /> */}
        </>
    )
}