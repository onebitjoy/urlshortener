// const mongoose = require("mongoose")
import mongoose from "mongoose"

const urlSchema = new mongoose.Schema({
  url_id: {
    type: String,
    required: true
  },
  original_url: {
    type: String,
    required: true
  },
  short_url: {
    type: String,
    required: true
  },
  number_of_clicks: {
    type: Number,
    required: true,
    default: 0
  },
  date: {
    type: String,
    default: Date.now
  }
})

const url_model = new mongoose.model('url', urlSchema)
let urlModel
export default urlModel = url_model