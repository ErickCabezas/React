import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//var= parecida al let
//const= const no puede modificarse ni volver a declararse pero si lo manejamos como objetos si lo podemos actualizar osea los elementso dentro
//let= si me deja cambiarle osea sobrescribirle y let tiene un ámbito de bloque y se puede volver a declarar

const raiz_app_react= document.getElementById('root')

ReactDOM.createRoot(raiz_app_react).render(
  //para desarrollo es muy importante esta etiqueta
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
