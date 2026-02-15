let num=[34,65,23,12,45,34,56,22,56]

//outer loop -> 34,65,23,12,45,34,56
for(let i=0;i<num.length;i++){

//inner loop -> 22,56
for(let j=i+1;j<num.length;j++){
//compare the outer loop element with inner loop element
if(num[i]===num[j]){
console.log("Duplicate element is: "+num[i])
}
}



}