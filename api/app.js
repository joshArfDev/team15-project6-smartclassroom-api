import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import env from './config.js'

// app init
const app = express()

// settings
app.set('port', env.PORT)

// middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// Route Not Found
app.use((req, res) => {
  res.status(404).json({
    error: 'Rout Not Found'
  })
})

export default app
