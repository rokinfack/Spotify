const PlayList = require("../models/playListModel")

const getAllPlayList = async (req,res, next) => {
    try {
        let playList = await PlayList.find(
        ).populate('user', 'songs').sort({createAt:-1})
        res.json({msg: "Success !!", playList})
    } catch (error) {
        next(error)
    }
}

const createPlayList = async (req, res, next) => {
    try {

        let playList = new PlayList(req.body);
            playList.user = req.user.id;
            playList.save();
        res.json({msg: "La play list créée avec success !!"})
        
    } catch (error) {
        next(error)
    }
}

const getOnePlayList = async (req, res, next) => {
    const id = req.params.id;
    try {
        let playList = await PlayList.findOne({_id:id}).populate('user', 'songs')
        
    } catch (error) {
        next(error)
    }
}

const updatePlayList = async (req, res, next) => {
    const id = req.params.id;

    const playListData = req.body;

    try {

        let playList = await PlayList.findByIdAndUpdate({_id:id, playListData})

        if(!playList || playList.user != req.user){
            const error = new Error('User not found')
        }

        res.json({msg:"La mise à jour de la play list réussi avec success !!", playList})
        
    } catch (error) {
        next(error)
    }

}

const deletePlayList = async (req,res) => {
    const id = req.params.id;

    try {

        let playList = await PlayList.findOneAndRemove({_id:id})

        if(!playList || playList.user != req.user){
            const error = new Error('User not found')
        }

        res.json({msg:"Suppression de la playList réussi !!", playList})
        
    } catch (error) {
        const erro = new Error('Une erreur lors de la suppression de la playList')
    }
}

module.exports = {getAllPlayList,createPlayList,getOnePlayList,updatePlayList,deletePlayList}