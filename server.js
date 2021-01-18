import express from 'express'
import usersRoutes from './routes/usersRoutes.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import colors from 'colors'
dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/users', usersRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT

app.listen(5000, console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV}`.yellow.inverse))