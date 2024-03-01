import { useEffect, useState } from 'react';
import * as friendsService from '../../services/friendsService'
import useSearch from '../../hooks/useSearch';
import styles from './Modal.module.css'

export default function Modal({onClose, invitedFriends}) {
    let [friends, setFriends] = useState([]);
    let { value, suggestions, onChange } = useSearch(friends);

    useEffect(() => {
        friendsService.getFriends()
            .then(result => {
                setFriends(result);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className={styles["modal"]}>
            <div className={styles["backdrop"]} onClick={onClose}></div>
            <div className={styles["modal-content"]}>
                <span className={styles["close"]} onClick={onClose}>&times;</span>
                <form className={styles["search-form"]} autoComplete='off'>
                    <input type="text" placeholder="Search friend..." name="search" onChange={onChange} value={value} />
                    <button type="submit">Invite friends</button>
                    <ul className={styles["search-suggestions"]}>
                        {suggestions.map((s) => (
                            <li key={s.id} className={styles["suggestion"]}>{s.name}</li>
                        ))}
                    </ul>
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