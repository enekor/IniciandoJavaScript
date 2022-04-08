function sayHello(){
    //console.log('hello world')
}

sayHello()

let valor
function hola(){
    valor = 'hola'
    //console.log(valor)
}

hola()

function suma(a,b=7){
    //console.log(a+b)
}

suma(20,10)
suma(12)

function conRetorno(valor){
    return valor+56
}

//console.log(conRetorno('23'))


//anonimas
var funcion = function(parametro = '12'){
    console.log(parametro)
}
//funcion()
//funcion('algo')

const message = 'mensaje super elaborado'
var sayHello = (name) => `hello ${name}`
var saybye = (name) => {return `adios ${name}`}

console.log(sayHello(message))
console.log(saybye(message))