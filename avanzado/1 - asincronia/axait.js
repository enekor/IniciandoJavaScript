
async function funcionAsync(){
     let promesa = new Promise((resolve,reject) => { 
         setTimeout(() => resolve('hecho'),1000)
     })

     let result = await promesa

     alert(result)
}