var numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12]
var suma = 0

for(pos in numeros){
    if(numeros[pos]%2 == 0){
        console.log(numeros[pos])
    }
    suma+=numeros[pos]
}

console.log('la suma de todos los numeros es '+suma)