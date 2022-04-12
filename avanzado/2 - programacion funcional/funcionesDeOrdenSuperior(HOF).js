const holaBucle = () => { 
    console.log('Hola')

}

const adiosBucle = () => {
    console.log('Adios')
}

const hazUnBucle = (n,accion) => {
    for(let i = 0;i<n;i++){
        accion()
    }
}

hazUnBucle(10,holaBucle)