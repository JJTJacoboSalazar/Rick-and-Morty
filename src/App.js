import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
// import characters from './data.js'; 
import Nav from './components/Nav/Nav';
import axios from 'axios';


function App() {
   const [characters, setCharacters] = useState([])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      })
   }
     /*Esta función  addRandomCharacter  se encarga de agregar un personaje aleatorio a la lista de personajes. 
- Se utiliza la librería  axios  para hacer una petición GET a la API de Rick and Morty. 
- Se obtiene un personaje aleatorio de la lista de personajes obtenida de la API. 
- Se verifica si el personaje ya ha sido agregado a la lista de personajes utilizando el método  some . 
- Si el personaje ya ha sido agregado, se muestra una alerta indicando que el personaje ya ha sido agregado. 
- Si el personaje no ha sido agregado, se utiliza el método  setCharacters  para actualizar el estado de personajes con el nuevo personaje. */
const getRandomCharacter = () => {
   axios('https://rickandmortyapi.com/api/character').then(({ data }) => {
     const randomIndex = Math.floor(Math.random() * data.results.length);
     const randomCharacter = data.results[randomIndex];
     setCharacters((oldChars) => [...oldChars, randomCharacter]);
   });
 };

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id)
         })
      )
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} getRandomCharacter={getRandomCharacter} />
         <Cards characters={characters} onClose={onClose} />
         {/* <Card > */}
      </div>
   );
}

export default App;
