// imports
import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'

import { router as bookRoutes } from './routes/books.js' // must use .js when using modules style in node

// app setup
dotenv.config()
const app = express()

// middlewares
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE')
  next()
})
app.use(express.json())
app.use('/api/books', bookRoutes)

// connect to mongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT || 4000)

    if (process.env.DEV != null)
      console.log(
        `---------- CONNECTED TO DB | PORT: ${process.env.PORT} ----------`
      )
  })
  .catch((err) => console.log(err))
