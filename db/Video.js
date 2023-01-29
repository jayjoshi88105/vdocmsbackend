const mongodb = require("mongoose");

const videoSchema = new mongodb.Schema({
    vdo_title:String,
    vdo_desc:String,
    vdo_url:String,
    vdo_author:String,
    vdo_views:String
    // vdo_likes:String,
    // vdo_dislikes:String,
    // vdo_timestamp:String
});

module.exports = mongodb.model("videos", videoSchema);