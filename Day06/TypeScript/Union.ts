//union -> OR condition
//union is used to store multiple data types in a single variable
//union is denoted by | symbol

let value:number|null|string
value=null

let apiResponse:string|number
apiResponse=204
apiResponse="No content"
console.log(apiResponse)

//intersection -> AND condition
//intersection is used to combine multiple types into one type
//intersection is denoted by & symbol
let api:string&number

//type alias -> it is used to create a new name for a type
type emp={
    empname:string,
    empid:number,
    empage:number
}

type cus={
    cusname:string,
    cusid:number,
    cusage:number
}

type db=emp&cus

let data1:db={
    empname:"dilip",
    empid:23,
    empage:30,
    cusname:"dilip",
    cusid:23,
    cusage:30
}

console.log(data1)