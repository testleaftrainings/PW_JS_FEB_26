let mailId='dilip20@gmail.com'

//count how many char is present -> length
console.log("Total count of chars :"+mailId.length)
//index start from '0'   0 to 16 -> 17

//print char based on the index -> index of 7 -> charAt()
console.log("Print the values index 7 :"+mailId.charAt(7))

let empName="dinesh"
//${}- template literal
console.log(`length's : ${empName.length}`)

let msg='welcome to testleaf'
//welcome,to,testleaf
//split(" ")-> its delimiter the value
console.log(`Split the value ${msg.split(" ")}`)
let len=msg.split(" ")
console.log(len)
for(let i=0;i<len.length;i++){
    console.log(len[i])
}

let val="TestLeaf"
console.log("Lower Case :"+val.toLowerCase())
console.log("Upper Case :"+val.toUpperCase())

let id='dilip.rajendran@testleaf.com'
console.log(id.length)
//substring=> +ve
//start index
//start index , end index -1
let v=id.substring(5)
console.log("start index : "+v)
let v1=id.substring(5,12)
console.log("Start and End Index :"+v1)


//slice both +ve and -ve
//-ve -> index value strat from -1
//
let s=id.slice(-5)
//28-5 => 23
console.log("Slice :"+s)
let s1=id.slice(-6,-4)
//28-6=22
//28+4=24(22,24-1) =>(22,22)=>(-6,-5)
console.log(s1)

let ad="Java"
console.log("Replace :"+ad.replace('a','A'))
console.log("ReplaceALL :"+ad.replaceAll('a','A'))
