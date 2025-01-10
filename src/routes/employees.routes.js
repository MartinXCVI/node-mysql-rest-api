/* MODULE IMPORTS */
// Router class to create modular & mountable route handlers
import { Router } from 'express'
// Employees controllers imports
import { getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployeeById } from '../controllers/employees.controllers.js'

// Initializing an instance of Router
const router = Router()

/* Employees requests routes */
router.get('/employees', getEmployees) // Getting all employees

router.get('/employees/:id', getEmployeeById) // Getting employee by ID

router.post('/employees', createEmployee) // Creating a new employee

router.patch('/employees/:id', updateEmployee) // Updating/modifying an employee

router.delete('/employees/:id', deleteEmployee) // Deleting an employee


export default router