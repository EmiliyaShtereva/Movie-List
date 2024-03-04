import { useEffect, useState } from 'react';
import * as movieService from '../../services/movieService'
import useSearch from '../../hooks/useSearch'
import styles from './NavBar.module.css'
import MovieSearchModal from '../modal/MovieSearchModal';

export default function NavBar() {
    let [movies, setMovies] = useState([]);
    let [showMovieModal, setShowMovieModal] = useState(false);
    let [suggestionIndex, setSuggestionIndex] = useState(0);
    let [showSuggestions, setShowSuggestions] = useState(false);
    let { value, suggestions, onChange } = useSearch(movies);

    const movieClickHandler = (index) => {
        setSuggestionIndex(index);
        setShowMovieModal(true);
    }

    useEffect(() => {
        movieService.getMovies()
            .then(result => {
                setMovies(result);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            <header>
                <nav>
                    <div>
                        <form className={styles["search-form"]} autoComplete="off">
                            <input
                                type="text"
                                placeholder="Search movie..."
                                name="search"
                                onClick={() => setShowSuggestions(true)}
                                onChange={onChange}
                                value={value}
                            />
                            <ul className={styles["search-suggestions"]}>
                                {showSuggestions && suggestions.map((s, i) => (
                                    <li key={s.id} className={styles["suggestion"]} onClick={() => movieClickHandler(i)}>{s.name}</li>
                                ))}
                            </ul>
                        </form>
                    </div>
                </nav>
            </header>
            {showMovieModal &&
                <MovieSearchModal
                    onClose={() => {
                        setShowMovieModal(false);
                        setShowSuggestions(false);
                    }}
                    {...suggestions[suggestionIndex]}
                />
            }
        </>
    )
}