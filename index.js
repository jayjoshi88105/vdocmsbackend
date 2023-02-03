const express = require('express');
const cors = require('cors');
require('./db/config');
const Video = require('./db/Video');
const app = express();
app.use(express.json());
app.use(cors());

app.post("/addvideo",async (req,resp) => {
    let video = new Video(req.body);
    let result = await video.save();
    result = result.toObject();
    resp.send(result);
});

app.get("/videos", async (req,resp) => {
    let result = await Video.find();
    resp.send(result);
});

app.delete("/removevideo/:id", async (req,resp) => {
    let result = await Video.deleteOne({
        _id:req.params.id
    });
    resp.send(result);
});

app.get("/getvideodetail/:id",async (req, resp) => {
    let result = await Video.findOne({_id: req.params.id});
    resp.send(result);
});

app.listen(8000);