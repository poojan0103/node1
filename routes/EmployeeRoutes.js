const express = require("express");
const router = express.Router();
const Authmiddleware = require("../middleware/AuthMiddleware");
const zodMiddleware = require("../middleware/ZodeMiddleware");
const employeeValidationSchema = require("../util/EmployeeSchemaValidation");
const auth = require("../middleware/Auth1Middleware");
const EmployeeController = require('../controller/EmployeeController');
router.post('/employee', EmployeeController.addEmployee);
router.get('/employee', EmployeeController.getAllEmployee);

router.post('/employee',zodMiddleware.validate(employeeValidationSchema),EmployeeController.addEmployee)
router.get('/employee',auth.validate,EmployeeController.getAllEmployee)
module.exports = router;
