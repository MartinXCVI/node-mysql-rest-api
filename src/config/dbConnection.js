import { createPool } from 'mysql2/promise'
import { DB_HOST, DB_NAME, DB_PASS, DB_USER, DB_PORT } from './config.js'

export const connectDB = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  port: DB_PORT,
  database: DB_NAME
})