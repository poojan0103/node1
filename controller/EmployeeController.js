const employeeSchema = require('../model/EmployeeSchema');
const encrypt = require('../util/Encrypt');
const mailer = require('../util/mailer');
const otpGenerator = require('../util/Otpgenerator')
module.exports.addEmployee = async(req, res) => {

    let hash = await encrypt.hashPassword(req.body.password)
    
    
    

    var empData = {
        name : req.body.name,
        email : req.body.email,
        department : req.body.department,
        password : hash
    }

    console.log("empData",empData)
    var employee = new employeeSchema(req.body);
    
    
    employee.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "error",
            })
        }
        else {
            const otp = otpGenerator.generateOtp();
            mailer.sendMail(data.email,data.name,otp);
            res.status(201).json({
                message: "Employee Added Successfully",
                data: data
            })
        }
    })
}
module.exports.getAllEmployee = (req,res)=>{
    employeeSchema.find().populate('department').exec((err,data)=>{
        if(err){
            res.status(501).json({
                message:"error occured",
                Error : err
            })
        }
        else{
            res.status(200).json({
                message:"employee Fetched",
                data:data
            })
        }


    })
}
