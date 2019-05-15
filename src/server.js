require('dotenv').config()
const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const blogRouter = require('./routes/blogRouter')

const password = process.env.MONGO_DB_PASSWORD

const mongoUrl = `mongodb+srv://fullstackopen:${password}@cluster0-0dslf.mongodb.net/blog-app?retryWrites=true`
mongoose.connect(mongoUrl, { useNewUrlParser: true })

app.use(cors())
app.use(bodyParser.json())

app.use('/api/blogs', blogRouter)

const PORT = 3003
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`)
})
