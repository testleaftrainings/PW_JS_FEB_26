let data="amazon"
//0 -5
//0-6-0,5
let rev=""
//nozama
for(let i=data.length-1;i>=0;i--){
    rev=rev+data[i]
}
console.log(rev)

let name1="Dilip kumar"
//D,i,l,i,p -> split
//p,i,l,i,D ->res
//piliD-> join
let c=name1.split('').reverse().join('')
console.log(c)