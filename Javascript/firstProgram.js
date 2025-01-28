console.log("hello from B42 to Javascript")


age = 10;
if(age>18){
    console.log("You can vote")
}else{
    console.log("you can't Vote")
}


marks = 88;

if(marks < 35){
    console.log("Fail")
}else if(marks >= 35 && marks < 60){
    console.log("Passed with SecondClass")
}else if( marks >= 60 && marks < 75){
    console.log("passed with First Class")
}else {
    console.log("Passed with Disti....")
}

dept = "HR";
exp = 5;
sal = 10000;

if(dept === "HR"){
    if(exp >=5 ){
        if(sal == 100000){
            console.log("You have received special gift")
        }
    }
}

// initialize , condition, increament
for(i = 0; i <= 10; i++){
    result = 2*i
    console.log("2 * " + i + " = " + result);
}

x = y   value assign 
x == y   check value only            10 == 10   10 == "10"   true

x === y   check value with datatype  10 === 10  true  10 === "10"    false 

