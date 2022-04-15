var prom = 0.50

function sumaPromedio(a,b){
    return (a+b)*prom
}

console.log(sumaPromedio(2,3)) //2.5
prom = 1
console.log(sumaPromedio(2,3)) //5


const miModulo = function(){
    var prom = 0.5
    return{
        SumaPromedio: function(a,b){
            return (a+b)*prom
        },
        RestaPromedio: function(a,b){
            return (a-b)*prom
        }
    }
}

const {sumaPromediada, restaPromediada} = miModulo()

sumaPromediada(5,10) //12.5
prom=1 //al cambiar este no cambiara el valor dado que no estamos cambiando el de dentro de la funcion que instancia ambas funciones (suma y resta promediada)
sumaPromediada(2,10) //12.5