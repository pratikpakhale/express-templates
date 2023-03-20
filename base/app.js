// importing the required modules
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// importing the config files
const dbConfig = require('./config/database')
const envConfig = require('./config/environment')

const app = express()

app.use(cors())
app.use(express.json())

const errorHandler = require('./middlewares/errorHandler')

const v1Router = require('./v1/router')

app.use('/v1/', v1Router)

// error handling
app.use(errorHandler.get404)
app.use(errorHandler.globalErrorHandler)

// connect to database and start server
mongoose.set('strictQuery', true)
mongoose
  .connect(dbConfig.MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
    app
      .listen(envConfig.PORT, () => {
        console.log(`Server started on port ${envConfig.PORT}`)
      })
      .on('error', (err) => {
        console.log(`Server error: ${err.message}`)
      })
  })
  .catch((err) => {
    console.log(`MongoDB connection error: ${err.message}`)
  })
