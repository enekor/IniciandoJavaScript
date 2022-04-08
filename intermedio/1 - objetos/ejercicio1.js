var jugador = {
    fuerza: 0,
    incrementarFuerza: function(){
        this.fuerza++
    },
    consultarFuerza: function(){
        console.log('mi fuerza actual es de '+this.fuerza)
    }
}

for(var i=0;i<50;i++){
    jugador.incrementarFuerza()
}

jugador.consultarFuerza()