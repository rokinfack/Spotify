const { Schema, default: mongoose } = require("mongoose");

const PlayListSchema = new Schema({
    name: { type: String},
    songs:[{type:Schema.Types.ObjectId, ref:'Song'}],
    user: {type:Schema.Types.ObjectId, ref:'User'}
})

const PlayList = mongoose.model('PlayList', PlayListSchema);

module.exports = PlayList;