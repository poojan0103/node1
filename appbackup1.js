app.get('/hello',(req,res)=>{
    res.send("Hello World")
});

app.post('/hello',(req,res)=>{
    res.send("Hello World a")
    console.log(req.body)
});

app.delete("/hello/:id",(req,res)=>{
    console.log(req.params.id);
    var id = req.params.id; 
    res.send("Hello ..."+id)

});
app.put("/user/:id",(req,res)=>{
    try{
        var id = req.params.id;
        if (id == 1){
            throw new Error("user not found");

        }else{
            res.json({
                message:"user update",
                id:id,
                data:req.body.data
            })
        }
    }catch (err){
        res.status(404).send(err.message);
    }
});

app.get("/user/:name",(req,res)=>{
    var name = req.params.name;
    res.send("Hello" +name)
})

app.get("/employee/:age",(req,res)=>{
try{



    var age = req.params.age;
    if(age < 18) {
        throw new Error("employee not found");
    }else{
        var employees = search.searchData(age)

        res.json(employees)    
    }
    
}catch(err){
    res.status(404).send(err.message);

}
})

app.get("/employees/:salary",(req,res)=>{
    try{
    
    
    
        var salary = req.params.salary;
        if(salary < 20000) {
            throw new Error("employee not found");
        }else{
            var employees = search.searchData1(salary)
    
            res.json(employees)    
        }
        
    }catch(err){
        res.status(404).send(err.message);
    
    }
    })

    app.get("/employeess/:status",(req,res)=>{
        try{
            var status = req.params.status;
            if(status == False) {
                throw new Error("employee not found");
            }else{
                var employees = search.searchData2(status)
        
                res.json(employees)    
            }
            
        }catch(err){
            res.status(404).send(err.message);
        
        }
        })