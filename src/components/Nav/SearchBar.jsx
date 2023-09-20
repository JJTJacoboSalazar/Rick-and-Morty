import React, { useState } from "react";
import styles from './Nav.module.css'


const SearchBar = (props) =>{
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }
   const {onSearch} = props;
   return (
      <div className={styles.search}>
         <input type='search' placeholder="ID...🔎🔎🔎" onChange={handleChange} value={id} />
         <button className={styles.button} onClick={() => onSearch(id)}>Add char</button>
      </div>
   );
}

export default SearchBar;