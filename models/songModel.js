const { Schema, default: mongoose } = require("mongoose");

const SongSchema = new Schema({
    url: {type:String},
    rating: { type: Number},
    artiste: {type:Schema.Types.ObjectId,ref:'User'},
})

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;