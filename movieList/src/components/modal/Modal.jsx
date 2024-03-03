import { useEffect, useState } from 'react';
import * as friendsService from '../../services/friendsService'
import * as movieService from '../../services/movieService'
import useSearch from '../../hooks/useSearch';
import styles from './Modal.module.css'

export default function Modal({ onClose, updateListHandler, invitedFriends, img, name, duration, rating, synopsis, id }) {
    let [friends, setFriends] = useState([]);
    let [friendsToInvite, setFriendsToInvite] = useState([...invitedFriends]);
    let [showSuggestions, setShowSuggestions] = useState(false);
    let { value, suggestions, onChange } = useSearch(friends);

    useEffect(() => {
        friendsService.getFriends()
            .then(result => {
                setFriends(result);
            })
            .catch(err => console.log(err));
    }, [])

    const friendClickHandler = (friendName) => {
        if (friendsToInvite.includes(friendName)) {
            setShowSuggestions(false);
            return friendsToInvite;
        } else {
            setShowSuggestions(false);
            setFriendsToInvite(state => ([...state, friendName]));
        }
    }

    const inviteFriendsHandler = async (e) => {
        e.preventDefault();
        await movieService.addFriendsToList(img, name, duration, rating, synopsis, id, friendsToInvite)
            .then(result => console.log(result))
            .catch(err => console.log(err));

        updateListHandler(friendsToInvite);
    }


    return (
        <div className={styles["modal"]}>
            <div className={styles["backdrop"]} onClick={onClose}></div>
            <div className={styles["modal-content"]}>
                <span className={styles["close"]} onClick={onClose}>&times;</span>
                <form className={styles["search-form"]} autoComplete='off'>
                    <input
                        type="text"
                        placeholder="Search friend..."
                        name="search"
                        onClick={() => setShowSuggestions(true)}
                        onChange={onChange}
                        value={value}
                    />
                    <button type="submit" onClick={inviteFriendsHandler}>Invite friends</button>
                    {showSuggestions && (
                        <ul className={styles["search-suggestions"]}>
                            {suggestions.map((s) => (
                                <li
                                    key={s.id}
                                    className={styles["suggestion"]}
                                    onClick={() => friendClickHandler(s.name)}
                                >
                                    {s.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </form>
                <p>Invited Friends:</p>
                <div className={styles["friends"]}>
                    {friendsToInvite.map(f => (
                        <p>{f}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}