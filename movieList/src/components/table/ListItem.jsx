import { useState } from 'react'
import Modal from '../modal/Modal'
import MoreInfo from '../modal/MoreInfo'
import styles from './ListItem.module.css'

export default function ListItem({ duration, invitedFriends, id, img, name, rating, synopsis }) {
    const [friendsList, setFriendsList] = useState([...invitedFriends])
    const [updateFriendList, setUpdateFriendList] = useState(() => {
        let arr = [];
        for (let i = 0; i < invitedFriends.length; i++) {
            arr.push(invitedFriends[i].name)
        }
        return arr;
    })
    const [showModal, setShowModal] = useState(false);
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const updateListHandler = (friendList) => {
        let arr = [];
        for (let i = 0; i < friendList.length; i++) {
            arr.push(friendList[i].name)
        }
        setUpdateFriendList(arr);
        setFriendsList(friendList);
    }

    return (
        <tr data-testid="rows">
            <td className={styles["movie-image"]}>
                <img src={img} alt="movie name" />
            </td>
            <td className={styles["movie"]}>
                <p className={styles["movie-name"]}>{name}</p>
            </td>
            <td className={styles["invited-friends"]}>
                <p>{updateFriendList.join(", ")}</p>
            </td>
            <td className={styles["buttons"]}>
                <button onClick={() => setShowModal(true)}>Invite friends</button>
                <button onClick={() => setShowMoreInfo(true)} data-testid="more-info"><i className="fa-solid fa-info"></i></button>
            </td>
            <td>
                {showModal &&
                    <Modal
                        onClose={() => setShowModal(false)}
                        updateListHandler={updateListHandler}
                        invitedFriends={friendsList}
                        img={img}
                        name={name}
                        duration={duration}
                        rating={rating}
                        synopsis={synopsis}
                        id={id}
                    />}

                {showMoreInfo &&
                    <MoreInfo
                        onClose={() => setShowMoreInfo(false)}
                        img={img}
                        name={name}
                        duration={duration}
                        rating={rating}
                        synopsis={synopsis}
                    />}
            </td>
        </tr>
    )
}