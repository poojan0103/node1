const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var search = require("./search");
const mongoose = require("mongoose");
const employeeRoutes = require("./routes/EmployeeRoutes");
const productRoutes = require("./routes/ProductRoutes");
const departmentRoutes = require("./routes/DepartmentRoutes");
const cartRoutes = require("./routes/CartRoutes");
const uploadRoutes = require("./routes/UploadRoutes");

//app.use(express.params())
app.use(express.json())
app.use('/emp', employeeRoutes);
app.use('/dep', departmentRoutes);
app.use('/cart',cartRoutes);
app.use('/upload',uploadRoutes);

app.use(bodyParser.urlencoded({
  extended: true
}));



//create server using expres
const PORT = 3000
app.listen(PORT, () => {
  console.log('server is running on port', PORT)


});
app.use('/product', productRoutes)
/*app.param('/hello',(req,res)=>{
    req.params('name')
    console.log(res.params)
})*/
mongoose.connect("mongodb://localhost:27017/admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database");
  }
})