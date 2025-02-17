function taskExecut(){    
    console.log('Task end asynchro...')
}

// setTimeout(taskExecut, 5000)

console.log('start')

taskEx = new Promise((resolve, reject) => {
setTimeout(()=>{
    resolve('Task end asynchro...')
},5000)
})

taskEx.then((data)=>{
    console.log(data)
})



function exTask5SecWait(){
    setTimeout(()=>{
        console.log('task Execute')
    },5000)
}

async function getData(){
    await exTask5SecWait()
    // console.log(data)
}
getData();
console.log('end')
