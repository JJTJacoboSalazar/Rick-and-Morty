import React from "react";
import styles from "./Card.module.css";
import { Link, NavLink } from "react-router-dom";


export default function Card(props) {

   const {id, name, status, species, gender, origin, image, onClose} = props;

   return (
      <div className={styles.container}>
         <div className={styles.items}>
         <div className={styles.button}>
         <button className={styles.onclose} onClick={() => onClose(id)}>X</button>
         </div>
         <NavLink className={styles.name} to={`/detail/${id}`}>
         <h3>{name}</h3>
         </NavLink>
         {/* <h3>{status}</h3>
         <h3>{species}</h3>
         <h3>{gender}</h3>
         <h3>{origin}</h3> */}
         <img src={image} alt='image' />
         </div>
      </div>
   );
}