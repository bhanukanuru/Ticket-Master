const express=require('express')
const router= express.Router()
const customersController= require('../app/controllers/coustomersControllers')
const departmentsController= require('../app/controllers/deaprtmentsController')
const employeesController= require('../app/controllers/employeesControllers')
const ticketsController =require('../app/controllers/ticketsController')
const usersController = require('../app/controllers/usersController')
const authenticateUser = require('../app/middleware/authenticateUser')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account)
router.delete('/users/logout', authenticateUser, usersController.logout)

router.get('/customers',authenticateUser, customersController.list)
router.post('/customers',authenticateUser, customersController.create)
router.get('/customers/:id',authenticateUser, customersController.show)
router.delete("/customers/:id", authenticateUser, customersController.destroy)
router.put('/customers/:id',authenticateUser, customersController.update)

router.get('/departments',authenticateUser, departmentsController.list)
router.post('/departments',authenticateUser, departmentsController.create)
router.get('/departments/:id',authenticateUser, departmentsController.show)
router.delete('/departments/:id',authenticateUser, departmentsController.destroy)
router.put('/departments/:id',authenticateUser, departmentsController.update)

router.get('/employees',authenticateUser, employeesController.list)
router.post('/employees',authenticateUser, employeesController.create)
router.get('/employees/:id',authenticateUser, employeesController.show)
router.delete('/employees/:id',authenticateUser, employeesController.destroy)
router.put('/employees/:id',authenticateUser, employeesController.update)

router.get('/tickets',authenticateUser, ticketsController.list)
router.post('/tickets',authenticateUser, ticketsController.create)
router.get('/tickets/:id',authenticateUser, ticketsController.show)
router.delete('/tickets/:id',authenticateUser, ticketsController.destroy)
router.put('/tickets/:id',authenticateUser, ticketsController.update)



module.exports=router