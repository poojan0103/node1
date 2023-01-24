const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = async(password) =>{

    var hashedPassword = await bcrypt.hash(password,saltRounds);
    
    return hashedPassword;

}
const comparePassword = async (password,hash) =>{

    // bcrypt.compare(password,hash,(err,result)=>{
    //     console.log(result);
    // })

    const flag = await bcrypt.compare(password,hash);
    return flag;

}


module.exports = {hashPassword,comparePassword}