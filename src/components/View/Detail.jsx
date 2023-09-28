import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from './Details.module.css'

const Detail = () => {
    // Cuando utilizas el hook  useParams , puedes obtener los valores de los parámetros dinámicos definidos en tus rutas
    const {id} = useParams();
    const [character, setCharacter] = useState ([]);

    // [NOTA]: este código es el que buscará al personaje de la API cada vez que el componente se monte. Y luego, cada vez que se desmonte, borrará su información

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
        {character. name && (
            <div className={styles.containery}>
                <div className={styles.left}>
                <h2>{character.name}</h2>
                <p>STATUS | {character.status}</p>
                <p>SPECIE | {character.species}</p>
                <p>GENDER | {character.gender}</p>
                <p>ORIGIN | {character.origin.name}</p>
                </div>

            <div className={styles.right}>
        <div>

        <img src={character.image} alt={character.image} />
         </div>
        </div>
          </div>  
                
            
        )} 
        </div>
    )
}

export default Detail;