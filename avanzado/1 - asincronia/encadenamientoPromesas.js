
let promesa = new Promise(function(resolve,reject){
    setTimeout(() => resolve(1),1000)
}).then((result) => { 
    alert(result)
    return result*2
}).then((result) => { 
    alert(result)
    return result*2
})