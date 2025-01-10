/* MODULE IMPORTS */
// Router class to create modular & mountable route handlers
import { Router } from 'express'
// Index controllers imports
import { ping } from '../controllers/index.controllers.js'

// Initializing an instance of Router
const router = Router()

/* Index request route */
router.get('/ping', ping)

export default router