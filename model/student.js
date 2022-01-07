const mongoose = require('mongoose')
const studentSchema= mongoose.Schema({
    studentName : {
        type : String,
        required: true
    },
    studentNumber: {
        type : Number,
        required : true
    },
    studentEmail :{
        type : String,
        required : true
    },
    studentMajer:{
        type : String,
        required : true
    }

});

module.exports = mongoose.model('Student', studentSchema);
