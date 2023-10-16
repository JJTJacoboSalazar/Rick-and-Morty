const http = require('http');
const url = require('url');
const data = require('./utils/data');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');


const parsedUrl = url.parse(req.url, true);
const pathName = parsedUrl.pathname;
const characterId = pathName.split('/').pop();

// Verificamos la existencia de la URL

if(pathName.includes('/rickandmorty/character')){
    // Busca el personaje por su id en el archivo data.js
    const character = data.find((character) => character.id === parseInt(characterId))


    // Envia como respuesta un JSON 
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(character));
    // ^Recordemos que la informacion siempre viaja en JSON, por lo que aca se realiza dicha conversion ^
    
} else {
    // Respuesta de error por parte del cliente
    res.statusCode = 404;
    res.end('Invalid URL')
}
});


server.listen(3001, () => {
    console.log('Servidor escuchando en el puerto 3001');
})
