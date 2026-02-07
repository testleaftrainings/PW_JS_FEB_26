function Login(callback){
    console.log("Login")
   callback()
}

function createLead(){
    console.log("Create Lead")
}

Login(createLead) //callback function
