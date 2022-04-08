var colores = new Array('verde','azul','rojo','amarillo')

for(var i = 0;i<colores.length;i++){
    if(colores[i]==='rojo'){
        console.log('hola')
    }
}

for(color in colores){
    console.log(colores[color])
}