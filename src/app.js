/* NODE/EXPRESS IMPORTS */
import express from 'express'

/* MODULE IMPORTS */
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import { PORT } from './config/config.js'

// Initializing the app as an instance of Express
const app = express()
// Middleware for parsing incoming requests with JSON payload
app.use(express.json())

/* ROUTES */
app.use(indexRoutes) // index.routes.js routes
app.use('/api', employeesRoutes) // employees.routes.js routes

// Default 404 for non-found endpoints
app.use((req, res, next)=> {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default app