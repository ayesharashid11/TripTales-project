const mongoose = require("mongoose");

const ImgDetailsSchema = new mongoose.Schema(
  {
    img: String,
    title: String,
  },
  { collection: "ImgDetails" }
);

const ImgDetails = mongoose.model("ImgDetails", ImgDetailsSchema);
module.exports =  ImgDetails; 