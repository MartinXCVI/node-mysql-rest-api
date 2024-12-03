import { response } from 'express'
import { connectDB } from '../config/dbConnection.js'

export const getEmployees = async (req, res)=> {
  try {
    const [rows] = await connectDB.query('SELECT * FROM employees')
    res.json(rows)
  } catch(error) {
    console.error(error)
    return res.status(500).json({ message: 'Something went wrong' })
  }
  
}

export const getEmployeeById = async (req, res)=> {
  try {
    const [rows] = await connectDB.query('SELECT * FROM employees WHERE id = ?', [req.params.id])

    if(rows.length <= 0) {
      return res.status(404).json({ message: 'Employee not found or does not exist' })
    }
    res.json(rows[0])
  } catch(error) {
    console.error(error)
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

export const createEmployee = async (req, res)=> {
  const { name, salary } = req.body

  try {
    const [rows] = await connectDB.query('INSERT INTO employees (name, salary) VALUES (?, ?)', [name, salary])
    res.send({
      id: rows.insertId,
      name,
      salary
    })
  } catch(error) {
    console.error(error)
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

export const updateEmployee = async (req, res)=> {
  const { id } = req.params
  const { name, salary } = req.body

  try {
    const [result] = await connectDB.query('UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
  
    if(result.affectedRows === 0) {
      return res.status(404).json({ message: 'Employee not found or does not exist' })
    }
    const [rows] = await connectDB.query('SELECT * FROM employees WHERE id = ?', [id])
    res.json(rows)
  } catch(error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const deleteEmployee = async (req, res)=> {

  try {
    const [result] = await connectDB.query('DELETE FROM employees WHERE id = ?', [req.params.id])

    if(result.affectedRows <= 0) {
      return res.status(404).json({ message: 'Employee not found or does not exist' })
    }
    res.sendStatus(204)
  } catch(error) {
    console.error(error)
    return res.status(500).json({ message: 'Something went wrong' })
  }
  
}