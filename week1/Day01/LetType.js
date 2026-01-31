//let -> allow only reassign but it will not allow redeclare 

let Status=90
Status="js"
console.log(Status + typeof(Status))

//let Status=null

{
let Status=true
console.log(Status)
}

{
    let Status
    console.log(Status)
}


