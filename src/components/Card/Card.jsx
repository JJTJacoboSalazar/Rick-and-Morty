import React, {useState, useEffect} from "react"
import { connect } from "react-redux" 
import { NavLink } from "react-router-dom"
import { addFav, removeFav } from "../../redux/actions"
import styles from "./Card.module.css"

function Card(props) {

   const {id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites} = props;
   const [isFav, setIsFav] = useState(false);

   //* Este useEffect comprobará si el personaje que contiene la Card ya está dentro de tus favoritos. En ese caso setteará el estado isFav en true. Cópialo y pégalo dentro de tu componente (no te olvides de importar este hook).

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      // isFav ? removeFav(id) : addFav(props);
      // setIsFav(!isFav)

      if (isFav) {
         removeFav(id);
       } else {
         addFav(props);
       }
       setIsFav(!isFav);

      //  el condicional if verifica si  isFav  es verdadero. Si es verdadero, se ejecuta la función  removeFav(id) . Si no es verdadero, se ejecuta la función  addFav(props) . Luego, se utiliza  setIsFav(!isFav)  para cambiar el valor de  isFav  y actualizar el estado. 

   }


   return (
      <div className={styles.container}>
         <div className={styles.items}>
         <div className={styles.button}>
         <button className={styles.onclose} onClick={() => onClose(id)}>X</button>
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
      }
         </div>
         <NavLink className={styles.name} to={`/detail/${id}`}>
         <h3>{name}</h3>
         </NavLink>
         {/* <h3>{status}</h3> */}
         <h3>{species}</h3>
         {/* <h3>{gender}</h3> */}
         <h3>{origin}</h3>
         <img src={image} alt='image' />
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);