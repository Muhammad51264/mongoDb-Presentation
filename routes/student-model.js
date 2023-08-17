const express = require("express");
const {getAllStudent,deleteStudent,updateStudent ,addStudent} = require("../controllers/student-controller");

const router = express.Router();


router.get('/',getAllStudent);

router.post('/',addStudent);

router.delete('/:id',deleteStudent);

router.put('/:id',updateStudent);


module.exports = router;

