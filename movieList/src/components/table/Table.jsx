import { useEffect, useState } from 'react'
import * as movieService from '../../services/movieService'
import Pagination from '../pagination/Pagination'
import ListItem from './ListItem'
import styles from './Table.module.css'
import Footer from '../footer/Footer'
import NavBar from '../navbar/NavBar'

export default function Table() {
    const [data, setData] = useState([]);
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        movieService.getOnePage(Number(currentPage))
            .then(result => {
                setData(result);
                setMovies(result.data);
            })
            .catch(err => console.log(err));
    }, [currentPage]);

    return (
        <>
            <NavBar />
            <table>
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th></th>
                        <th>Invited Friends and Groups</th>
                        <th>Actions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(m => (
                        <ListItem key={m.id} {...m} />
                    ))}
                </tbody>
            </table>

            <Pagination
                {...data}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

            <Footer />
        </>
    )
}