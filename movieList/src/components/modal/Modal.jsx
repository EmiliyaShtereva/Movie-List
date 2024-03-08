import { useEffect, useState } from 'react';
import * as friendsService from '../../services/friendsService'
import * as movieService from '../../services/movieService'
import useSearch from '../../hooks/useSearch';
import styles from './Modal.module.css'

export default function Modal({ onClose, updateListHandler, invitedFriends, img, name, duration, rating, synopsis, id }) {
    let [friends, setFriends] = useState([]);
    let [friendsToInvite, setFriendsToInvite] = useState([...invitedFriends]);
    let [showSuggestions, setShowSuggestions] = useState(false);
    let [disabledButton, setDisabledButton] = useState(true);
    let [successfulyInvited, setSuccessfulyInvited] = useState(false);
    let { value, suggestions, onChange } = useSearch(friends);

    useEffect(() => {
        let data = [];
        friendsService.getFriends()
            .then(result => {
                for (let i = 0; i < result.length; i++) {
                    let shouldBePushed = true;
                    for (let j = 0; j < friendsToInvite.length; j++) {
                        if (result[i].name === friendsToInvite[j].name) {
                            shouldBePushed = false;
                        }
                    }

                    if (shouldBePushed) {
                        data.push(result[i]);
                    }
                }
            })
            .catch(err => console.log(err));

        friendsService.getFriendGroups()
            .then(result => {
                for (let i = 0; i < result.length; i++) {
                    let shouldBePushed = true;
                    for (let j = 0; j < friendsToInvite.length; j++) {
                        if (result[i].name === friendsToInvite[j].name) {
                            shouldBePushed = false;
                        }
                    }

                    if (shouldBePushed) {
                        data.push(result[i]);
                    }
                }
            })
            .catch(err => console.log(err));

        setFriends(data);
    }, [])

    const friendClickHandler = (friendId, friendName, friendsInGroup) => {
        for (let i = 0; i < friendsToInvite.length; i++) {
            if (friendsToInvite[i].name === friendName) {
                setShowSuggestions(false);
                setDisabledButton(true);
                return friendsToInvite;
            }
        }

        setShowSuggestions(false);
        setDisabledButton(false);

        if (friendsInGroup) {
            setFriendsToInvite(state => ([...state, { id: friendId, name: friendName, friends: friendsInGroup }]));
        } else {
            setFriendsToInvite(state => ([...state, { id: friendId, name: friendName }]));
        }
    }

    const inviteFriendsHandler = async (e) => {
        e.preventDefault();
        await movieService.addFriendsToList(img, name, duration, rating, synopsis, id, friendsToInvite)
            .then(() => {
                updateListHandler(friendsToInvite);
                setSuccessfulyInvited(true);
                setDisabledButton(true);
            })
            .catch(err => console.log(err));
    }


    return (
        <div className={styles["modal"]}>
            <div className={styles["backdrop"]}
                onClick={() => {
                    onClose();
                    setSuccessfulyInvited(false);
                }}>
            </div>
            <div className={styles["modal-content"]}>
                <span className={styles["close"]}
                    onClick={() => {
                        onClose();
                        setSuccessfulyInvited(false);
                    }} data-testid="close">
                    &times;
                </span>
                <form className={styles["search-form"]} autoComplete='off'>
                    <input
                        type="text"
                        placeholder="Search friend..."
                        name="search"
                        onClick={() => setShowSuggestions(true)}
                        onChange={onChange}
                        value={value}
                    />
                    <button type="submit" disabled={disabledButton} onClick={inviteFriendsHandler}>Invite friends</button>
                    {successfulyInvited && <p className={styles["successfuly-invited"]}>Successfuly Invited Friends</p>}
                    {showSuggestions && (
                        <ul className={styles["search-suggestions"]}>
                            {suggestions.map((s) => (
                                <li
                                    key={s.id}
                                    className={styles["suggestion"]}
                                    onClick={() => friendClickHandler(s.id, s.name, s.friends)}
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
                        f.friends
                            ? <p key={f.id}>{f.name}: {[...f.friends].join(', ')}</p>
                            : <p key={f.id}>{f.name}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}