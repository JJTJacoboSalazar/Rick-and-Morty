import React from 'react'
import SearchBar from './SearchBar';
import styles from './Nav.module.css'
import logo from './img/Rick-and-Morty.png'
import { Link, NavLink } from 'react-router-dom';


const Nav = (props) => {
    const {onSearch,getRandomCharacter, onLogout} = props;
    return (
        <header className={styles.miheader}>
            <Link to={'/Home'}>
            <img className={styles.logo} src={logo} alt="logo" />
            </Link>
        <nav className={styles.container}>
            <Link to={'/About'}>
                <button className={styles.button}>About</button>
            </Link>

           <div className={styles.container}>
            <button className={styles.button} onClick={getRandomCharacter}>Random</button>
            <SearchBar onSearch={onSearch} />
           </div>
            <NavLink className={styles.logOut}>
            <span onClick={onLogout}>Log out</span>
            </NavLink>
      
        </nav>
        </header>

    )
}

export default Nav;