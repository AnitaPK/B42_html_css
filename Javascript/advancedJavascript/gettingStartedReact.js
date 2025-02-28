const {greetings} = require('./data')   

const dataFile = require('./data')


function sayLouder(text){
    return text.toUpperCase()
}


console.log(sayLouder('We are learning ReactJS With lots of fun and hardwork...'))
console.log(sayLouder('we are happy to learn code everyday'))

function getPositiveNumbers(numbersArray){
    return numbersArray.filter((element)=> element > 0)
}

console.log(getPositiveNumbers([10, -5, 2, -4])); //[10, 2]


function getPassingTests(results) {
      return  results.filter((element)=> element.grade >= 10)
}
// sample usage (do not modify)
const data = [{id: 1,grade: 10}, {id: 2,grade: 4}, {id: 3, grade: 18}]
console.log(getPassingTests(data))

dataFile.greetings();


console.log(dataFile.name1)