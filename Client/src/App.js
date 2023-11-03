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

   // const login = (userData) => {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }

   const login = async(userData) => {
      try {
         const {email, password} = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const response = await axios.get(`${URL}?email=${email}&password=${password}`)
         const {access} = response.data;
         setAccess(response.data);
         if(access) {
            navigate('/home')
         }
      } catch (error) {
         console.error(error);
      }
   }


   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const logout = () => {
      setAccess(false);
      navigate('/');
   }

   // const onSearch = (id) => {

   //    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
   //      if (data.name) {
   //        // Verificar si el personaje ya existe en el estado characters
   //        const characterExists = characters.find((character) => character.id === data.id);
   //        if (characterExists) {
   //          window.alert('¡Este personaje ya ha sido agregado!');
   //        } else {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //        }
   //      } else {
   //        window.alert('¡No hay personajes con este ID!');
   //      }
   //    });
   //  };

   const onSearch = async (id) => {
      try {
         const URL = 'http://localhost:3001/rickandmorty/character/'
         const response = await axios.get(`${URL}${id}`)
         const {data} = response;
         if(data.name){
            const characterExists = characters.find((character) => character.id === data.id);
            if(characterExists){
               window.alert('¡Este personaje ya ha sido agregado!')
            } else {
               setCharacters((oldChars) => [...oldChars,data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!')
         }
      } catch (error) {
         console.error(error)
      }
   }
    
    const getRandomCharacter = () => {
      axios(`https://rickandmortyapi.com/api/character/`)
      .then(({ data }) => {
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
