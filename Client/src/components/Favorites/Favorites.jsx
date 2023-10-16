import { connect, useDispatch } from "react-redux";
import { useState } from "react";
import Card from "../Card/Card";
import style from "./Favorites.module.css"
import { filterCards, orderCards } from "../../redux/actions";



const Favorites = (props) => {
  const dispatch = useDispatch();
  const {myFavorites} = props;

  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux)
  }

    const handleFilter = (e) => {
    dispatch(filterCards(e.target.value))
  }

   return (
   <div >
    <h1>My Favorites</h1>
    <select onChange={handleOrder}>
      <option value="A">Ascendente</option>
      <option value="D">Descendente</option>
    </select>

    <select onChange={handleFilter}>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Genderless">Genderless</option>
      <option value="unknown">unknown</option>
    </select>

    <div className={style.cont}>
      {myFavorites.map(character => (
         <Card
         key= {character.id}
         id={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin}
         image={character.image}
        //  onClose={onClose}
         />
         ))}
         </div>
   </div>);
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, null)(Favorites);
