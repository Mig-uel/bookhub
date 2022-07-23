// imports
import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'

// app setup
dotenv.config()
const app = express()

// middlewares
app.use(express.json())

// connect to mongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT || 3000)

    if (process.env.DEV != null)
      console.log(
        `---------- CONNECTED TO DB | PORT: ${process.env.PORT} ----------`
      )
  })
  .catch((err) => console.log(err))
