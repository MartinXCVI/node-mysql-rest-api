/* MODULE IMPORTS */
import { connectDB } from '../config/dbConnection.js'

export const ping = async (req, res)=> {
  const [result] = await connectDB.query('SELECT "Pong" AS result')
  res.json(result[0])
}