/* MODULE IMPORTS */
import { config } from 'dotenv'

// Enabling the use of environment variables
config()

// Defining env constants
export const PORT = process.env.PORT || 3000
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASS = process.env.DB_PASS || 'password'
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_NAME = process.env.DB_NAME || 'company_db'
export const DB_PORT = process.env.DB_PORT || 3306