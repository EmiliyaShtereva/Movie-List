import { useState } from 'react'
import Modal from '../modal/Modal'
import MoreInfo from '../modal/MoreInfo'
import styles from './ListItem.module.css'

export default function ListItem({ duration, invitedFriends, id, img, name, rating, synopsis }) {
    const [updateFriendList, setUpdateFriendList] = useState([...invitedFriends])
    const [showModal, setShowModal] = useState(false);
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const updateListHandler = (friendList) => {
        setUpdateFriendList(friendList);
        console.log(friendList);
    }

    return (
        <>
            <tr>
                <td className={styles['movie-image']}>
                    <img src={img} alt="movie name" />
                </td>
                <td className={styles['movie']}>
                    <p className={styles['movie-name']}>{name}</p>
                </td>
                <td className={styles['invited-friends']}>
                    <p>{updateFriendList.join(', ')}</p>
                </td>
                <td className={styles['buttons']}>
                    <button onClick={() => setShowModal(true)}>Invite friends</button>
                    <button onClick={() => setShowMoreInfo(true)}><i className="fa-solid fa-info"></i></button>
                </td>
            </tr>

            {showModal &&
                <Modal
                    onClose={() => setShowModal(false)}
                    updateListHandler={updateListHandler}
                    invitedFriends={invitedFriends}
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
        </>
    )
}