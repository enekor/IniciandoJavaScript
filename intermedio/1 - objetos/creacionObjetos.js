
//declarativo o literal
var personaLiteral = {
    nombre : 'pepe',
    edad : 12,
    saludar : function(){
        console.log('hola, mi nombre es '+this.nombre)
    }
}

//construidos
function Persona (nombre, edad){
    this.nombre = nombre
    this.edad = edad
    this.saludar = function(){
        console.log('hola, mi nombre es '+this.nombre)
    }
}

var personaConstruida = new Persona('Juan',45)

//new Object
var personaNewObject = new Object({
    nombre : 'Juan',
    edad : 78,
    saludar: function(){
        console.log('Hola, mi nombre es '+this.nombre)
    }
})