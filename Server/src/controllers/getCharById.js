const axios = require('axios');


const getCharById = (res, id) => {

    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
        const {id,name,gender,species,origin,image,status} = response.data;

        return {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        };
    })
    .then((response) => {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(response));
    })

    .catch((reason) => {
        console.log(reason);
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.end(reason.message)
    })
}






module.exports = {
    getCharById,
}