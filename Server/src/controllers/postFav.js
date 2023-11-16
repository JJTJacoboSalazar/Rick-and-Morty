const {Favorite} = require('../db/DB_connection');

const postFav = async (req, res) => {
  const {id, name, origin, status, image, species, gender} = req.body;

  try {
    if (!id, !name || !origin || !status || !gender || !image || !species) { 
        return res.status(401).send({message: "Faltan datos"});
        
    }

    await Favorite.findOrCreate({
      where: {
        id,
        name,
        origin,
        status,
        gender,
        image,
        species,
      },
    });
    const allFavorites = await Favorite.findAll();
    return res.json(allFavorites);
  
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};



module.exports = postFav;