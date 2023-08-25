const { getAllPlayList,createPlayList,getOnePlayList, updatePlayList, deletePlayList } = require('../controllers/playListController');

const playListRouter = require('express').Router()

playListRouter.get('/all', getAllPlayList);
playListRouter.post('/newPlayList', createPlayList);
playListRouter.route('/:id')
.get(getOnePlayList)
.put(updatePlayList)
.delete(deletePlayList)


module.exports = playListRouter;