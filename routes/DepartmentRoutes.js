const express = require("express");
const router = express.Router();
const DepartmentController = require('../controller/DepartmentController');
router.post('/department',DepartmentController.adddepartment);
router.get('/department',DepartmentController.getAllDepartment);
module.exports = router;
