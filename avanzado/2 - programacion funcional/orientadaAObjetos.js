class Vehiculo{
    constructor(marca){
        this.marca = marca
        this.encendido = false
        this.velocidad = 0
        this.fuel = 100
    }

    arrancar(){
        if(this.fuel > 0){
            this.encendido = true
        }
    }

    repostar(){
        this.fuel = 100
    }
}

class Coche extends Vehiculo{
    constructor(marca, puertas){
        super(marca)
        this.puertas = puertas
        this.abierto = false
    }

    abrir(){
        this.abierto = true
    }

    cerrar(){
        this.abierto = false
    }
}

const Mazda = new Coche('mazda',5)

console.log(Mazda.marca) //parte de vehiculo
console.log(Mazda.puertas) //parte de coche