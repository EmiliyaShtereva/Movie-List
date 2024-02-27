import ListItem from './ListItem'
import styles from './Table.module.css'

export default function Table() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th></th>
                        <th>Invited Friends</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </tbody>
            </table>
        </>
    )
}