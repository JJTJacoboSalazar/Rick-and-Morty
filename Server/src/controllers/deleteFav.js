const {Favorite} = require('../db/DB_connection');

const deleteFav = async(req, res) => {
    const {id} = req.params;
    try {
        await Favorite.destroy({where: {id}})

        // Buscar los personajes favoritos restantes en la BDD
        const favorites = await Favorite.findAll();

        return res.status(201).json(favorites);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = deleteFav;