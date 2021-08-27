import React from 'react';
import styles from './searchBar.module.css'

const SearchBar = (props) => (
         
        <div className={styles.searchBar}>
            <div className={styles.logo}>
            <i className="fas fa-bars"></i>
            <i className="fab fa-youtube"></i>
            <h1>Youtubee</h1>
            </div>
            <div className={styles.search}>
                <form action="">
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
            <div className={styles.user}>
                <i className="far fa-user"></i>
            </div>
        </div>

    );

export default SearchBar;