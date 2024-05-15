import { useState } from 'react'
import './App.css'
import ButtonAction from './components/BottonAction'

//componente PADRE

function App() {
  //hasta aqui JS
  
  //Que es un estado = es una variable que tiene un get y un set
  // una variable se cambia de valor de forma permanente mediante el uso de un estado
  //const [nombre, setNombre]= useState('Mundo')
    const [nombre, setNombre]= useState('Mundo123')

  function buttonAct ({texto}){
    alert("el button a sido presionado")
  }

  function callBack(data){
    //React nota el cambio de estado de una variable y vuelve a renderizar y repinta solo la parte que cambia
    setNombre(data)
    alert(data)
  }
  const texto = "Aceptar"
//empieza JSX
  return (
    <>
    <div>
      <button onClick={buttonAct}>{texto}</button>
      {/*Con componenetes HIJOS*/}
      {/*agregando el primer componente button*/}
      <ButtonAction texto={texto} action={buttonAct} callback={callBack}/>
      <ButtonAction texto={texto} action={buttonAct} callback={callBack}/>
      <ButtonAction texto={texto} action={buttonAct} callback={callBack}/>
      <p>{nombre}</p>
    </div>
    </>
  )
}

export default App
