import mongoose from "mongoose"

//credentials
const username = process.env.user
const password = process.env.password
const cluster = process.env.cluster

const mongourl = `mongodb+srv://${username}:${password}@${cluster}/urldb?retryWrites=true&w=majority`

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongourl)
    console.log("Database connection established!")
  } catch (error) {
    console.error("Can't connect to database: " + error.message)
    process.exit(1)
  }
}

await connectToMongoDB()