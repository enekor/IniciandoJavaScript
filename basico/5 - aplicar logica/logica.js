var dinero = 132

function salirDeViaje(precioViaje){
    var asequible = dinero-precioViaje
    if (asequible > 0) return 'Si, puedes salir de viaje, te quedaria un total de '+asequible+'€'
    else if(asequible === 0) return 'Si, pero tienes el presupuesto ajustado'
    else return 'toca seguir ahorrando'
}


//ternario

function salirDeViajeTernario(precioViaje){
    const resultado = dinero > precioViaje
        ? 'puedes salir de viaje'
        : 'no puedes salir de viaje'

    console.log(resultado)
}
