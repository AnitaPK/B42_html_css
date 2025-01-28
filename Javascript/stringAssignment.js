str1 = 'Wisdom'
str2 = "Sprouts IT Training Hub"
str3 = `Batch 42`

str4 = "Pawan"+" Patil"

console.log(typeof(str4))

console.log(str4.length)

console.log(str4.toUpperCase())

console.log(str4.toLowerCase())

str5 = str1 +" "+ str2
console.log(str5)
console.log(str1.concat(" ",str2))

console.log(str5.charAt(7))

// .indexOf(), .lastIndexOf(), .includes(), .startsWith(), .endsWith().

console.log(str5.indexOf("S"))
console.log(str5.indexOf("i"))

console.log(str5.lastIndexOf('i'))

console.log(str5.includes("it"))


// .slice(), .substring(), .substr() 

// strTemp = str5.substring(7,14)
// console.log(str5)
// console.log(strTemp)

strTemp = str5.slice(7,14);
console.log(str5)
console.log(strTemp)


// .trim(), .trimStart(), .trimEnd().

str7 = "                    HELLO                 ";
console.log(str7.length);
console.log(str7.trim().length)
console.log(str7.trimStart().length)
console.log(str7.trimEnd().length)

str8 = "My ..... Name .....";
console.log(str8)
str9 = str8.replaceAll(".....", "Wisdom");
console.log(str9)

str10 = "Apple|Mango|Banana|Orange"
arrayNew = str10.split("|")
console.log(arrayNew)

array1 = ["Watermelon","Pineapple","Grapes"]
console.log(array1)
console.log(array1.join("|"))


console.log(str5);
console.log(str5.replaceAll(" ", "-"))

str10 = "wisdom sprouts iT training hub"
console.log(str10);
result =''
capitalizeNext= true;
for(i=0;i<str10.length;i++){
    if (str10[i] === " ") {
        result += " ";
        capitalizeNext = true;
      } else if (capitalizeNext) {
        result += str10[i].toUpperCase();
        capitalizeNext = false;
      } else {
        result += str10[i];
      }
}
console.log(result);
