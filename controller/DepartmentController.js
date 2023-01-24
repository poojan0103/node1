const departmentSchema = require("../model/DepartmentSchema")

exports.adddepartment = (req,res)=>{
    var department = new departmentSchema(req.body);
    department.save((err,data)=>{

        if(err){
            res.status(501).json({
                message: "error",
            })

        }
        else{
            res.status(200).json({
                message : "department added",
                data:data
            })
        }
    })
}
exports.getAllDepartment = (req,res)=>{
    departmentSchema.find((err,data)=>{
        if (err){
            res.status(501).json({
                message : "Error"
            })
        }
        else{
            res.status(200).json({
                message : "Departments",
                data:data
            })
        }
    })
}
