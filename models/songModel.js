const { Schema, default: mongoose } = require("mongoose");

const SongSchema = new Schema({
    url: {type:String},
    rating: { type: Number},
    artiste: {type:String},
})

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;