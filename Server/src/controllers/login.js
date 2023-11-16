const {User} = require('../db/DB_connection');


const login = async (req,res) => {
    const {email, password} = req.query;
    try {
        if(!email || !password){
            return res.status(400).json({message: "Faltan datos"})
        } 
        // Buscar el usuari
        const user = await User.findOne({
            where: {email} 
        });
        // Verificar se e encontro usuario
        if(!user){
            return res.status(404).json({message: "Usuario no encontrado"})
        }
        // Verificar contraseña
        if(user.password !== password){
            return res.status(403).json({message: "Contraseña incorrecta"})
        }
        // Acceso exitoso
        return res.status(200).json({
            access: true
         })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}




module.exports = login;