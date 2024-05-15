// tipos de componentes:
// class components - obsoleto  "obsoleto": Unknocked
// funcional components - se usa actaulamente

//Props de la aplicación que son como los atributos que se podraian pasar
// se crea el primer componente 
function ButtonAction({texto, action, callback}){
    // las funciones antes del return
    /* function buttonAction (){
        alert("el button a sido presionado en el component")
    } */
    return(
        <button
        style={{backgroundColor:'red', color:'white'}}
        onClick={()=>callback(texto)}
        >
            {texto}
        </button>
    )
}

//exportamos la funcion asi como exportabamos en express los modulos
export default ButtonAction;