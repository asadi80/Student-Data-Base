var express = require('express');
var router = express.Router();
const Student = require('../model/student')
const studentControl = require('../controller/studentController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Student Data Base' });
});

router.get('/stdudentsinfo',studentControl.studentInformation);
router.post('/insert', studentControl.insertStudentInformation);
router.post('/update', studentControl.updateStudentInformation);
router.post('/delete', studentControl.deleteStudent);


module.exports = router;
