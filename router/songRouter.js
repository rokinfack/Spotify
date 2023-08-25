const { getAllSongs, createSong, getOneSong, updateSong, deleteSong } = require('../controllers/songController');

const songRouter = require('express').Router()

songRouter.get('/allSong', getAllSongs)

songRouter.post('/newSong', createSong)

songRouter.route('/:id')
.get(getOneSong)
.put(updateSong)
.delete(deleteSong)



module.exports = songRouter;