
function compruebaNombre(nombre){
    return new Promise(function(resolve,reject){
        if(nombre === "pablo"){
            resolve('bien, te llamas pablo')
        }else{
            reject('Un momento, tu no eres pablo')
        }
    })
}

compruebaNombre('pablo').then(response=>console.log(response)).catch(error=>console.error(error))
compruebaNombre('pablos').then(response=>console.log(response)).catch(error=>console.error(error))


//Promise.all(listaDePromesas) -> recibe una lista de promesas y devuelve una lista de resultados de dichas promesas si tiene exito, si no lo tiene, la primera razon de fallo (assertAll en java)
//Promise.race(listaDePromesas) -> recibe una lista de promesas y devuelve el valor de la primera promesa en resolverse (assertAny en java)
//Promise.reject(razon) -> devuelde una promesa rechazada con el motivo de ello
//Promise.resolve(valor) -> devuelve una promesa cumplida con el valor de dicha promesa