const USER_LOGGED = false
const BLOCK_TEXT = document.querySelector('.texto')

if(USER_LOGGED){
    BLOCK_TEXT.innerHTML = 'haz click aqui para ver el contenido'
}else{
    BLOCK_TEXT.innerHTML = 'debes registrarte para ver el contenido'
}