const Student = require('../model/student')
insertStudentInformation = function(req, res, next){
    const student = new Student({
      studentName : req.body.studentname,
      studentNumber: req.body.studentnumber,
      studentEmail :req.body.studentemail,
      studentMajer:req.body.studentmajer
    });
    
    student.save((error, resualt)=>{
      if(error){
        console.log(error);
        res.redirect('/')
        return;
      }
      console.log(resualt);
      res.redirect('/stdudentsinfo')
    
  
    });
  };

  studentInformation = function(req, res, mext){
    Student.find({},'studentName studentNumber studentEmail studentMajer',(error, resualt)=>{
      if(error){
        console.log(error);
        res.redirect('/')
      }
      console.log(resualt);
      res.render('index', {items : resualt})
    })
  };

  updateStudentInformation = function(req, res, next){
    const ID = req.body.id
    const updateStudent={
      studentName : req.body.studentname,
      studentNumber: req.body.studentnumber,
      studentEmail :req.body.studentemail,
      studentMajer:req.body.studentmajer
    }
    Student.updateOne({_id : ID},{$set: updateStudent},(error, doc)=>{
      if(error){
        console.log(error);
        res.redirect('/')
        return ;
      }
      console.log(doc);
      res.redirect('/stdudentsinfo')
    })
  };

  deleteStudent = function(req, res, next){
    const ID = req.body.id
    Student.deleteOne({_id : ID},(error, doc)=>{
      if(error){
        console.log(error);
        res.redirect('/')
        return ;
      }
      console.log(doc);
      res.redirect('/stdudentsinfo')
    })
  };


  module.exports=
  {
    insertStudentInformation : insertStudentInformation,
    studentInformation : studentInformation,
    updateStudentInformation : updateStudentInformation,
    deleteStudent : deleteStudent,
  }