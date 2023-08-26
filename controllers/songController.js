const PlayList = require("../models/playListModel");
const Song = require("../models/songModel");

const getAllSongs = async (req, res) => {
    try {
        const playListId= req.params.playList_id;

        let playList = await PlayList.findById(playListId);

        res.json(playList.songs);
        
    } catch (error) {
       next(error);
    }
}

const createSong = async (req, res) => {
   
    try {
        const playListId = req.params.playList_id;
        const playList = await PlayList.findById(playListId)

        let newSong = new Song(req.body)

        playList.songs.push(newSong);
        await playList.save()

        res.status(201).json({msg:"Creation du song réussi avec success !!", playList })
    } catch (error) {
        
    }
}

const getOneSong = async (req, res) => {
   

    try {

        const playListId = req.params.playList_id;
        const songId = req.params.song_id;
        const playList = await PlayList.findById(playListId)
        let song = playList.songs.id(songId)

        res.json({masg:'Success !!', song})
    } catch (error) {
        
    }
}

const updateSong = async (req, res) => {

    try {

        const playListId = req.params.playList_id;
        const songData = req.body;

        const query= {
            _id:playListId,
            'songs._id':song_id
        }

        const update = {
            $set: { 'songs.$': {songData}}
        };

        const options = { new:true};


        const playList = await PlayList.findOneAndUpdate(query,update,options)
       

        res.json({msg:"Updated successfull !!", playList})
    } catch (error) {
        next(error)
        
    }
}

const deleteSong = async (req, res) => {
   

    try {
       

        const playListId = req.params.playList_id;
        const songId = req.params.song_id;
        const playList = await PlayList.findById(playListId)

        const song = playList.songs.id(songId).remove();
      

        res.json({msg: "La suppression réussi avec success !!", song})
    } catch (error) {
        next(error)
        
    }
}

module.exports = {getAllSongs,createSong,getOneSong,updateSong,deleteSong}