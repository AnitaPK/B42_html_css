num=2345
noOfDigit = 4
sum=0
for(i=1;i<=4;i++){
    r = num%10
	sum = sum+r
	num = num/10
    num = Math.floor(num)
    // console.log("num  :  ",num,"  sum  :  ",sum,"  r  :  ",r)
}
console.log(sum)
NUMBER = 345678234563456

while(NUMBER>0){

    r = NUMBER%10
	sum = sum+r
	NUMBER = NUMBER/10
    NUMBER = Math.floor(num)
}
console.log(sum)

// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }
Number1 = 3426
reverseNumber  = 0;
console.log(reverseNumber, "Before ")

for(i=0;i<4;i++){
	reverseNumber = (Number1%10) +  reverseNumber *10;
    Number1  = (Number1 -  Number1%10) /10 
}
console.log(reverseNumber,"After")

// iteration 
//            i    reverseNumber                Number1
//  1st       0     3426%10 + 0 * 10 = 6     3426  -   3426% 10   = 3420 /10 = 342
//  2nd       1     342 % 10 + 6*10  = 62    342 - 342%10 = 340 /10 =         34
//  3rd       2     34 % 10 +  62*10 = 624   34 - 34%10 = 34-4    =   30/10        3 
//  4th       3     3% 10 + 624*10 = 6243    3-3%10 = 0/10   =0
//  5th       4

 while(Number1>0){
    reverseNumber = (Number1%10) +  reverseNumber *10;
    Number1  = (Number1 -  Number1%10) /10 
 }
console.log(reverseNumber,"After")
