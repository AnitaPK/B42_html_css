empObjEx = {}
empObj = {
    fName:'Kapil',
    lName:'Aghav',
    sal:1234567890,
    address:{
        laneNo:'45A4',
        city:"pune",
        pincode:'411001'
    },
    fullName:function(){
        return this.fName +' '+ this.lName + ' '+this.address.city
    },
    skiils:['CCNA','Switching','Firewall']

}

console.log(empObj.sal);

console.log(empObj['sal']);

empObj.sal=87654321;
console.log(empObj['sal']);
empObj['sal'] = 987654327654;
console.log(empObj.sal);

empObj.department = 'Infra'

console.log(empObj);

for(let key in empObj){
    console.log(key);
    console.log(empObj[key])
}

// for(let value of empObj){
//     console.log(value);
// }

console.log(`
    Employee Name is ${empObj.fName} . Pincode is ${empObj.address.pincode}
    `);
pin = empObj.address.pincode;         //destructuring

console.log(pin)


fName = empObj.fullName()
console.log(fName)
empObj.skiils.map((skill)=>console.log('skills of '+empObj.fullName()+' '+skill))

console.log(Object.keys(empObj));
console.log(Object.values(empObj));
console.log(Object.entries(empObj));

console.log(typeof(empObj));
empStr = JSON.stringify(empObj)
console.log("typeOf", typeof(empStr), empStr)

// {
//     "lname":"Kapil","age":10
// }

objEmp1 = JSON.parse(empStr)
console.log("typeOf", typeof(objEmp1), objEmp1)

//Assignment
student={
    name:"John",
    age:20,
    grade:'B'
}
student.subject = 'Math'

student.grade ="A"

delete student.grade