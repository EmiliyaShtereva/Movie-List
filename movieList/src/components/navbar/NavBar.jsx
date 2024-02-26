import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <>
            <header>
                <nav>
                    <div>
                        <a href="#">Logo</a>
                    </div>

                    <div>
                        <form className={styles["search-form"]}>
                            <button type="submit"><i className="fa fa-search"></i></button>
                            <input type="text" placeholder="Search movie..." name="search" />
                        </form>
                    </div>

                    {/* Logged-in users */}
                    {/* <div className={styles["user">
                    <a href="#">Logout</a>
                </div>  */}

                    {/* Guest users */}
                    <div className={styles["guest"]}>
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                    </div>
                </nav>
            </header>
        </>
    )
}