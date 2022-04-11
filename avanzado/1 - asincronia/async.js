async function funcionAsync(){
    return Promise.resolve('Hola')
}

async function funcionAsync2(){
    return 'funciona'
}

let funcionAsync3 = async() => { return 'hola ptra vez'}

funcionAsync.then (resp => console.log(resp))
funcionAsync2.then (resp => console.log(resp))