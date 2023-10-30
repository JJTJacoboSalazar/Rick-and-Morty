let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;
    myFavorites.push(character);
    res.status(200).json(myFavorites);
}

const deleteFav = (req, res) => {
    const {id} = req.params;
    myFavorites = myFavorites.filter((character) => character.id !== Number(id)) //Filtramos de manera que eliminamos aquel que tiene el mismo id que recibimos por params
    res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
}