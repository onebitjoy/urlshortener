import { Router } from "express"
const url_router = Router()
import urlModel from "../models/urlmodel.js"
import { nanoid } from "nanoid"
import validator from "validator"

url_router.post("/short", async (req, res) => {
  const { original_url } = req.body

  const url_id = nanoid()

  if (validator.isURL(original_url)) {
    try {
      let url = await urlModel.findOne({ original_url })

      if (url) { // if url is already in database
        return res.json(url)
      }

      // if url is not found in DB
      const short_url = process.env.base + url_id

      url = new urlModel({
        original_url,
        short_url,
        url_id,
        date: new Date()
      })

      await url.save()
      res.json(url)

    } catch (error) {
      console.log(error)
      return res.status(500).send("Server Error")
    }
  }
  else {
    res.status(400).send({ error: "Invalid URL" })
  }
})

export default url_router