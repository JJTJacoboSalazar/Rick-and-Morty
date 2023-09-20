import React from 'react'
import SearchBar from './SearchBar';
import styles from './Nav.module.css'
import logo from './img/Rick-and-Morty.png'


const Nav = (props) => {
    const {onSearch,getRandomCharacter} = props;
    return (
        <header className={styles.miheader}>
            <img className={styles.logo} src={logo} alt="logo" />
        <nav className={styles.container}>
            <SearchBar onSearch={onSearch} />

           <div className={styles.random}>
            <button className={styles.button} onClick={getRandomCharacter}>Random</button>
           </div>
        
      
        </nav>
        </header>

    )
}

export default Nav;