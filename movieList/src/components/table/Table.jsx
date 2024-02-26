import ListItem from './ListItem'
import styles from './Table.module.css'

export default function Table() {
    return (
        <>
            <table>
                <tbody>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </tbody>
            </table>
        </>
    )
}