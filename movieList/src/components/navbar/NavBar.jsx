import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <header>
            <nav>
                <div>
                    <form className={styles["search-form"]}>
                        <input type="text" placeholder="Search movie..." name="search" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </nav>
        </header>
    )
}