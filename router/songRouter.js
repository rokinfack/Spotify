const { getAllSongs, createSong, getOneSong, updateSong, deleteSong } = require('../controllers/songController');

const songRouter = require('express').Router()

songRouter.get('/:playList_id/all', getAllSongs)

songRouter.post('/:playList_id/newSong', createSong)

songRouter.route('/:playList_id/song/:song_id')
.get(getOneSong)
.put(updateSong)
.delete(deleteSong)



module.exports = songRouter;