import { useEffect, useState } from 'react';
import * as friendsService from '../../services/friendsService'
import styles from './MovieSearchModal.module.css'
import useSearch from '../../hooks/useSearch';

export default function MovieSearchModal({ onClose, duration, invitedFriends, id, img, name, rating, synopsis }) {
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
                <div className={styles['movie-image']}>
                    <img src={img} alt="movie name" />
                </div>
                <div className={styles['movie-info']}>
                    <h1>{name}</h1>
                    <p><p className={styles['headers']}>Duration:</p> {duration}</p>
                    <p><p className={styles['headers']}>Rating:</p> {rating}</p>
                    <p><p className={styles['headers']}>Synopsis:</p> {synopsis}</p>
                </div>
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