import { connect } from "react-redux";
import Card from "../Card/Card";
import style from './Favorites.module.css'


const Favorites = (props) => {
  const {myFavorites} = props;

   return (
   <div className={style.container}>
    <h1>My Favorites</h1>
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
   </div>);
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, null)(Favorites);
