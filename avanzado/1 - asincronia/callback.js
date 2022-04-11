
const miFuncion = (val) => {
    return new Promise((resolve,reject) => {
        if (val) resolve("el valor es true")
        else reject("el valor es false")
    })
}

const funcExito = (res) =>{ console.log(res)}
const funcError = (res) =>{ console.error(res)}

//si sale bien llama al metodo de funcExito, si no, al de funcError (dos formas de hacerlo)
miFuncion(true).then(funcExito,funcError) //se pasa ambos en los parametros del then
miFuncion(false).then(funcExito).catch(funcError) //se pasa el exito por then y el error por catch