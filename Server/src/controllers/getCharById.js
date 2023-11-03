// const axios = require('axios');


// const getCharById = (res, id) => {

//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => {
//         const {id,name,gender,species,origin,image,status} = response.data;

//         return {
//             id,
//             name,
//             gender,
//             species,
//             origin,
//             image,
//             status
//         };
//     })
//     .then((response) => {
//         res.writeHead(200, {"Content-Type": "application/json"});
//         res.end(JSON.stringify(response));
//     })

//     .catch((reason) => {
//         console.log(reason);
//         res.writeHead(500, {"Content-Type": "text/plain"});
//         res.end(reason.message)
//     })
// }



// const getCharById = (req, res) => {
    //     const {id} = req.params;

//     axios
//     .get(`${URL}${id}`)
//     .then(response => {
    //         const character = response.data;
    
    //         if(character) {
//             const {id, status, name, species, origin, image, gender} = character;

//             res.status(200).json({id, status, name, species, origin, image, gender})
//         } else {
//             res.status(404).json({message: 'Not found'})
//         }
//     })
//     .catch(reason => {
    //         res.status(500).json({message: reason.message});
    //     })
    // }
    
    const axios = require('axios');
    
    const URL = 'https://rickandmortyapi.com/api/character/';

    
const getCharById = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await axios.get(`${URL}${id}`);
        const character = response.data;

        if(character){
            const { id, status, name, species, origin, image, gender } = character;

            res.status(200).json({ id, status, name, species, origin, image, gender });
        } else {
            res.status(404).json({message: 'Not found'})
        }
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



module.exports = getCharById;
