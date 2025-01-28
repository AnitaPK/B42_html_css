day = 6;

switch (day){
    // case 0:
    //     console.log("Holiday")
    case 1:
        console.log("Mon ")
        break;
    case 2:
        console.log("Tue")
        break;

    case 3:
        console.log("WED")
        break;

    case 4:
        console.log("Thur")
        break;

    case 5:
        console.log("FRI")
        break;

    case 0 || 6:
        console.log("Holiday")
        break;
    default:
        console.log("Invalid")
}

console.log(Date());
const today = new Date();
console.log(today)
console.log(today.getDate())

function greeting(){
    console.log("Hello Batch 42........")
}
greeting();

function addition(){
    add = 11+22
    console.log(add)
}
addition();

function additionUser(x,y){
    add = x+y;
    console.log(add);
}

additionUser(14,15)
function addUser(x,y){
    return x+y;
}
console.log(addUser(11,33));
add1 = addUser(44,44);


multiplication = () => console.log("arrow function",11+33)

multiplication()

multiUser = (a,b) => console.log(a*b)
multiUser(2,2);

multiUserReturn = (a,b) => a*b;

console.log(multiUserReturn(3,3));
mulResult = multiUserReturn(4,4);

console.log(mulResult)

multiLineUser = (a,b,c) => {
    r1 =  a*b
    return r1/c
}
res1 = multiLineUser(2,8,4)
console.log(res1);

greet = () => console.log("Good morning Batch 42  ***1")
greet();

(function (){})();

// (() => console.log("Good morning Batch 42 ***2"))();

(function(){console.log("Good morning Batch 42 ***3")})();

// write a function to create Fibonacci  series 

function Fibonacci(terms){
    let a = 0, b = 1;
    console.log(a);
    console.log(b);

    for (let i = 3; i <= terms; i++) {
        let next = a + b;
        console.log(next);
        a = b;
        b = next;
    }
}
Fibonacci(10);

// Create a function to calculate the area and perimeter of a rectangle.

// area = length*width;
// perimeter = 2*length+2*width;