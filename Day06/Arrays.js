let data=[34,'a',null,true,23.89]
//length of the array-> .length
console.log("Total length of the array is: "+data.length)
//length start index of '0' ->system defined

//print the index of 2
console.log("Index of 2 is: "+data[2])

//push-> add the element at the end of the array
//pop -> remove the last element of the array

//let data=[34,'a',null,true,23.89,JS]
data.push("JS")
console.log("After push: "+data)

data.pop()
console.log("After pop: "+data)

//unshift-> add the element at the beginning of the array
data.unshift("Playwright")
console.log("After unshift: "+data)

//shift-> remove the first element of the array
data.shift()
console.log("After shift: "+data)

//34,a,,true,23.89
//34,a,true,23.89
//splice-> add/remove the element at the specified index
data.splice(2,"D","J") //add the element at index 2
console.log(" adding After splice: "+data)

data.splice(2,3) //remove the element at index 2
console.log("deleting After splice: "+data)

data.splice(2,1,"Dilip") //replace the element at index 2
console.log("replacing After splice: "+data)

//sort()-> sort the array in ascending order
let array=[23,45,65,78,23,90]
array.sort()
console.log("After sorting: "+array)

array.reverse()
console.log("After reverse: "+array)

