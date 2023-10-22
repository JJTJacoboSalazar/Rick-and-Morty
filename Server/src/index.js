const http = require('http');
const PORT = 3001;
//* const data = require('./utils/data'); comentado por Homework Promise/////
const {getCharById} = require('./controllers/getCharById');


const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const {url} = req;


// const parsedUrl = url.parse(req.url, true);
// const pathName = parsedUrl.pathname;
// const characterId = pathName.split('/rickandmorty/character/')[1];

// Verificamos la existencia de la URL

// if(pathName.includes('/rickandmorty/character')){
//     // Busca el personaje por su id en el archivo data.js
//     getCharById(res, characterId);
    
// } else {
//     // Respuesta de error por parte del cliente
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Invalid URL')
// }
if(url.includes('/rickandmorty/character')){
    let urlArray = url.split("/"); //['rickandmorty', 'character', '5']
    let id = Number(urlArray.pop());

    getCharById(res,id);
}
});


server.listen(PORT, () => {
    console.log('Server is running on port 3001');
})


//if (url.includes("/rickandmorty/character")) {
// Extraer el ID del personaje de la URL
//const id = Number(url.split("/").pop());

// Llamar a la función getCharById para obtener los detalles del personaje
//getCharById(res, Number(id));
//}
//})
//.listen(PORT, "localhost");