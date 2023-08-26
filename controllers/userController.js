const User = require("../models/userModel")
const jwt = require("jsonwebtoken");

const config = require('../config')



const register = async (req, res) => {
 
  const userData = req.body
    
    try {
      const newUser = new User(userData);
      await newUser.hashPassword();
      await newUser.save();
      res.json({ msg: "Inscription Done !!!", newUser });
    } catch (error) {
      res.status(500).json({ msg: "Erreur lors de l'inscription" });
    }
  };

  const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({email})
      if(!user){
        return res.status(401).json({message:"Nom d'utilisateur incorrect."})
      }
      const passwordMatch = await user.comparePassword(password)
      if(!passwordMatch){
        return  res.status(401).json({message:"Mot de passe incorrecte."})
      }
      const token = jwt.sign({ userId: user._id}, config.jwtSecret)
      res.json({token})
    } catch (error) {
      res.status(500).json({msg:"Erreur lors de la connexion"})
    }
  };

module.exports = {login,register }