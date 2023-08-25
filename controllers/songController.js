const Song = require("../models/songModel");

const getAllSongs = async (req, res) => {
    try {

        let songs = await Song.find();

        res.json({msg: "Success !!"})
        
    } catch (error) {
        const erro = new Error('Request not found !')
        throw erro;
    }
}

const createSong = async (req, res) => {
    try {
        let newSong = new Song(req.body)

        newSong.save()

        res.json({msg:"Creation du song réussi avec success !!", newSong})
    } catch (error) {
        
    }
}

const getOneSong = async (req, res) => {
    const id = req.parms.id;

    try {
        let song = await Song.findOne({_id:id})

        res.json({masg:'Success !!', song})
    } catch (error) {
        
    }
}

const updateSong = async (req, res) => {
    const id = req.params.id;
    const songData = req.body;

    try {
        let song = await Song.findOneAndUpdate({_id:id, songData})

        res.json({msg:"Updated successfull !!", song})
    } catch (error) {
        
    }
}

const deleteSong = async (req, res) => {
    const id = req.params.id;

    try {
        let song = await Song.findOneAndRemove({_id:id})

        res.json({msg: "La suppression réussi avec success !!", song})
    } catch (error) {
        
    }
}

module.exports = {getAllSongs,createSong,getOneSong,updateSong,deleteSong}