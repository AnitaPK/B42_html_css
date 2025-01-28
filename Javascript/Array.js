arr1 = []
// arr1.isArray();
fruits = ['banana', 'mango']
console.log(fruits)

fruits[0]
fruits[1]
fruits[2] = 'grapes'
console.log(fruits)
// fruits[10] = 'chickoo'

fruits.push('chickoo')
console.log(fruits)

fruits.unshift('Orange')
console.log(fruits)
// fruits.pop()
// console.log(fruits)
// fruits.shift()
// console.log(fruits)

// slice    splice 

fruitsSlice = fruits.slice(2,4)
console.log(fruitsSlice)

fruits.splice(4,2,"Apple","Watermelon")
console.log(fruits)
len = fruits.length
for(i=0;i<len;i++){
    console.log(fruits[i])
}
for(let element of fruits){
    console.log(element)
}
for (let index in fruits){
    console.log(index," : "+ fruits[index])
}

fruits.forEach((fruit)=>console.log(fruit))

fruits.map((f)=>console.log(f))
fruits.map((fr)=>{
    console.log("Eat : ", fr)
})

fruits.map((fruit, index)=>{
    console.log("Eat : " + fruit +"  "+  index + " times")
})

// indexOf include 
console.log(fruits.indexOf('Pineapple'))

console.log(fruits.includes("Pineapple"))

console.log(fruits)


const revFruits = [];

for(i=len-1;i>=0;i--){
    revFruits.push(fruits[i])
}
console.log(revFruits);

// len ->6
// iteration    i    fruits[i]     revFruits 
// 1            5      Watermelon  ['Watermelon']
// 2            4     Apple        ['Watermelon', 'Apple']
// 3            3     grapes       ['Watermelon','Apple','grapes']
//              2
//              1
//              0
//              -1

numArray = [45,6,23,78,0,6]
largestValue = -Infinity; 
secondLargest = -Infinity;
for(let n of numArray){
    if(n > largestValue){
        secondLargest = largestValue
        largestValue = n;
    }
}
console.log("secondLargest",secondLargest,"largestValue", largestValue)

// ite      n      largestValue     secondLargest