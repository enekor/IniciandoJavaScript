 //scope privado que solo puede ver la funcionAsync

 const sumauno = ()=>{ 
     var numero = 0
     return () => ++numero
 }

 const incrementar = sumauno()

 console.log(incrementar()) //1
 console.log(incrementar()) //2
 console.log(incrementar()) //3
 console.log(incrementar()) //4


 //Solo nos saldra el nombre si se llama al metodo que nos devuelve el nombre ya que es un valor almacenado en la funcion, y solo accesible desde este ya que es privado
 const ejemploClosure = () => { 
     let nombre = 'no hay nombre'
     return {
        setNombre: (valor) => {nombre = valor},
        getNombre: () => nombre
     }
 }

 const persona = ejemploClosure()
 console.log(persona.nombre)
 console.log(persona.getNombre())
 console.log(persona.setNombre('Pepe'))
 console.log(persona.nombre)
 console.log(persona.getNombre())
