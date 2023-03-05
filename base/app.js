// This file is the entry point of the application. It is responsible for setting up the server and connecting to the database.

// Importing the required modules
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// Importing the config files
const dbConfig = require('./config/database')
const envConfig = require('./config/environment')

const app = express()

app.use(cors())
app.use(express.json())

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/', router)

// Connect to database and start server
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
