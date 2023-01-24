const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = Schema ({
    name:{
        type:String,
        require:true
    },
    email :{
        type:String,
        require:true,
        unique:true
    },
    department:{
        type :Schema.Types.ObjectId,
        ref : 'department'

    },
    password:{
        type:String,
        required:true
    },
    otp:{
        type: String,
        require:true,
    }
})

module.exports = mongoose.model('Employee1',employeeSchema);
