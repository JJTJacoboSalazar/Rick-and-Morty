import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
// import characters from './data.js'; 
import Nav from './components/Nav/Nav';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './components/View/About';
import Detail from './/components/View/Detail'
import { NotFound } from './components/View/NotFound';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


function App() {
   const [characters, setCharacters] = useState([])

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   const EMAIL = "tadeo.jacobo6@gmail.com";
   const PASSWORD = "jacobo1234";

   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const logout = () => {
      setAccess(false);
      navigate('/');
   }

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        if (data.name) {
          // Verificar si el personaje ya existe en el estado characters
          const characterExists = characters.find((character) => character.id === data.id);
          if (characterExists) {
            window.alert('¡Este personaje ya ha sido agregado!');
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      });
    };
    
    const getRandomCharacter = () => {
      axios('https://rickandmortyapi.com/api/character').then(({ data }) => {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const randomCharacter = data.results[randomIndex];
        
        // Verificar si el personaje ya existe en el estado characters
        const characterExists = characters.find((character) => character.id === randomCharacter.id);
        if (characterExists) {
          getRandomCharacter(); // Llamar recursivamente a la función si el personaje ya existe
        } else {
          setCharacters((oldChars) => [...oldChars, randomCharacter]);
        }
      });
    };

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id)
         })
      )
   }


   const location = useLocation();

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onLogout={logout} onSearch={onSearch} getRandomCharacter={getRandomCharacter} />}

         <Routes>
            <Route path='/home' element={
               <Cards characters={characters} onClose={onClose} />}/>

            <Route path='/about' element={<About/>} />
            
            <Route path='/detail/:id' element={<Detail/>} />

            <Route path='/favorites' element={<Favorites onClose={onClose} />} />

            <Route path='/' element={<Form onLogin={login} />} />

            <Route path='*' element={<NotFound />} />
         </Routes>

      </div>
   );
}

export default App;
