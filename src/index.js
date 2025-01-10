/* MODULE IMPORTS */
import app from "./app.js"
import { PORT } from "./config/config.js"

/* APP/SERVER LISTENER */
app.listen(PORT)
console.log(`Server running on port ${PORT}...`)