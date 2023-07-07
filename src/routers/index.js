import express from "express"
import urlModel from "../models/urlmodel.js"

const index_router = express.Router()

index_router.get("/:url", async (req, res) => {
  try {
    const url = await urlModel.findOne({ url_id: req.params.url })
    if (url) {
      await urlModel.updateOne(
        { url_id: url.url_id },
        { $inc: { clicks: 1 } }
      )
      return res.redirect(url.original_url)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send("Server Error")
  }
})

export default index_router